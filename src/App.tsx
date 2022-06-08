import React, { useEffect, useState } from 'react';
import Pagination from './components/Table/Pagination/Pagination';
import Table from './components/Table/Table';
import { TableServices } from './utils/service'


function App() {

  const studentDetails = {

    data: [
      { studentid: 1, name: "sarath", studentclass: "10", studentsubject: "A", studentpercentage: "90" },
      { studentid: 2, name: "hash", studentclass: "10",studentsubject: "c", studentpercentage: "85" },
      { studentid: 3, name: "sabu", studentclass: "10",studentsubject: "b", studentpercentage: "70" },
      { studentid: 4, name: "ram",studentclass: "10", studentsubject: "A", studentpercentage: "50" },
      { studentid: 5, name: "arun", studentclass: "10",studentsubject: "f", studentpercentage: "60" },
      { studentid: 6, name: "jose", studentclass: "10",studentsubject: "A", studentpercentage: "70" },
      { studentid: 7, name: "ssa", studentclass: "9",studentsubject: "B", studentpercentage: "90" },
      { studentid: 8, name: "mani", studentclass: "9",studentsubject: "A", studentpercentage: "90" },
      { studentid: 1, name: "sarath", studentclass: "10", studentsubject: "A", studentpercentage: "90" },
      { studentid: 2, name: "hash", studentclass: "10",studentsubject: "c", studentpercentage: "85" },
      { studentid: 3, name: "sabu", studentclass: "10",studentsubject: "b", studentpercentage: "70" },
      { studentid: 4, name: "ram",studentclass: "10", studentsubject: "A", studentpercentage: "50" },
      { studentid: 5, name: "arun", studentclass: "10",studentsubject: "f", studentpercentage: "60" },
      { studentid: 6, name: "jose", studentclass: "10",studentsubject: "A", studentpercentage: "70" },
      { studentid: 7, name: "ssa", studentclass: "9",studentsubject: "B", studentpercentage: "90" },
      { studentid: 8, name: "mani", studentclass: "9",studentsubject: "A", studentpercentage: "90" },
      
    ] 
  }


  const [data, setData] = useState<any>(studentDetails.data);
  const [lengthdata, setLengthdata] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setrowsPerPage] = useState<number>(2)

  //get current page
  const indexofLastdata = currentPage * rowsPerPage;
  const indexofFirstdata = indexofLastdata - rowsPerPage;
  var currentdata = data.slice(indexofFirstdata, indexofLastdata);

  
  console.log(data)
  if (loading) {
    return <h2>LOADING ...</h2>
  }
  return (
    <div className="App">
      <Table firstdata={indexofFirstdata}  lastdata={indexofLastdata} filter={data} posts={currentdata} setdata={setData} rowperpage={setrowsPerPage} />
      <Pagination currentpage={currentPage} totalPages={data.length} postsPerPage={rowsPerPage} activePage={setCurrentPage} />
    </div>
  );
}

export default App;
