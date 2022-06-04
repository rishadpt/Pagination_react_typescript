import React, { useEffect, useState } from 'react';
import Pagination from './components/Table/Pagination/Pagination';
import Table from './components/Table/Table';
import {TableServices} from './utils/service'


function App() {
  const [data,setData] = useState<any>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [currentPage,setCurrentPage] = useState<number>(1)
  const [postsPerPage,setPostsPerPage] = useState<number>(2)

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



  //get current page
  const indexofLastdata =  currentPage * postsPerPage; 
  const indexofFirstdata = indexofLastdata - postsPerPage;
  try{
    var currentdata = data.slice(indexofFirstdata,indexofLastdata);
  }catch(e){
  }
 

  return (
    <div className="App">
    
    <Table posts={currentdata} loading={loading} />
    <Pagination currentpage={currentPage} totalPages={data.length} postsPerPage={postsPerPage} activePage={setCurrentPage}  />
    </div>
  );
}

export default App;
