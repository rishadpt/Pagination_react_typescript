import React, { useEffect, useState } from 'react';
import Pagination from './components/Table/Pagination/Pagination';
import Table from './components/Table/Table';
import {TableServices} from './utils/service'


function App() {
  const [data,setData] = useState<any>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [currentPage,setCurrentPage] = useState<number>(1)
  const [rowsPerPage,setrowsPerPage] = useState<number>(10)


  useEffect(() => {
    TableServices.getTabledata()
    .then((data:any) => {
      setLoading(true);
      try{
        var datas = data.responseData.products.data
       }catch(e){
       }
     
      setData(datas);
      setLoading(false);
    }
    )
  }, [])

console.log(rowsPerPage)

  //get current page
  const indexofLastdata =  currentPage * rowsPerPage; 
  const indexofFirstdata = indexofLastdata - rowsPerPage;
  try{
    var currentdata = data.slice(indexofFirstdata,indexofLastdata);
  }catch(e){
  }
 

  if (loading) {
    return <h2>LOADING ...</h2>
  }
  return (
    <div className="App">
    
    <Table posts={currentdata} setdata={setData}  rowperpage={setrowsPerPage}/>
    <Pagination   currentpage={currentPage} totalPages={data.length} postsPerPage={rowsPerPage} activePage={setCurrentPage}  />
    </div>
  );
}

export default App;
