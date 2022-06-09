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
      { studentid: 9, name: "sarath", studentclass: "10", studentsubject: "A", studentpercentage: "90" },
      { studentid: 10, name: "hash", studentclass: "10",studentsubject: "c", studentpercentage: "85" },
      { studentid: 11, name: "sabu", studentclass: "10",studentsubject: "b", studentpercentage: "70" },
      { studentid: 12, name: "ram",studentclass: "10", studentsubject: "A", studentpercentage: "50" },
      { studentid: 13, name: "arun", studentclass: "10",studentsubject: "f", studentpercentage: "60" },
      { studentid: 14, name: "jose", studentclass: "10",studentsubject: "A", studentpercentage: "70" },
      { studentid: 15, name: "ssa", studentclass: "9",studentsubject: "B", studentpercentage: "90" },
      { studentid: 16, name: "mani", studentclass: "9",studentsubject: "A", studentpercentage: "90" },
      { studentid: 17, name: "sarath", studentclass: "9", studentsubject: "A", studentpercentage: "90" },
      { studentid: 18, name: "hash", studentclass: "9",studentsubject: "c", studentpercentage: "85" },
      { studentid: 19, name: "sabu", studentclass: "9",studentsubject: "b", studentpercentage: "70" },
      { studentid: 20, name: "ram",studentclass: "9", studentsubject: "A", studentpercentage: "50" },
      { studentid: 21, name: "arun", studentclass: "9",studentsubject: "f", studentpercentage: "60" },
      { studentid: 22, name: "jose", studentclass: "10",studentsubject: "A", studentpercentage: "70" },
      // { studentid: 23, name: "ssa", studentclass: "9",studentsubject: "B", studentpercentage: "90" },
      // { studentid: 24, name: "mani", studentclass: "9",studentsubject: "A", studentpercentage: "90" },
      // { studentid: 25, name: "hash", studentclass: "10",studentsubject: "c", studentpercentage: "85" },
      // { studentid: 26, name: "sabu", studentclass: "10",studentsubject: "b", studentpercentage: "70" },
      // { studentid: 27, name: "ram",studentclass: "10", studentsubject: "A", studentpercentage: "50" },
      // { studentid: 28, name: "arun", studentclass: "10",studentsubject: "f", studentpercentage: "60" },
      // { studentid: 29, name: "jose", studentclass: "10",studentsubject: "A", studentpercentage: "70" },
      // { studentid: 30, name: "ssa", studentclass: "9",studentsubject: "B", studentpercentage: "90" },
      // { studentid: 31, name: "mani", studentclass: "9",studentsubject: "A", studentpercentage: "90" },
      // { studentid: 32, name: "sarath", studentclass: "9", studentsubject: "A", studentpercentage: "90" },
      // { studentid: 33, name: "hash", studentclass: "9",studentsubject: "c", studentpercentage: "85" },
      // { studentid: 34, name: "sabu", studentclass: "9",studentsubject: "b", studentpercentage: "70" },
      // { studentid: 35, name: "ram",studentclass: "9", studentsubject: "A", studentpercentage: "50" },
      // { studentid: 36, name: "arun", studentclass: "9",studentsubject: "f", studentpercentage: "60" },
      // { studentid: 37, name: "jose", studentclass: "10",studentsubject: "A", studentpercentage: "70" },
      // { studentid: 38, name: "ssa", studentclass: "9",studentsubject: "B", studentpercentage: "90" },
      // { studentid: 39, name: "mani", studentclass: "9",studentsubject: "A", studentpercentage: "90" },
      
      
    ] 
  }


  const [data, setData] = useState<any>(studentDetails.data);
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
      <Table activePage={setCurrentPage} filter={studentDetails.data} posts={currentdata} setdata={setData} rowperpage={setrowsPerPage} />
      <Pagination currentpage={currentPage} totalPages={data.length} postsPerPage={rowsPerPage} activePage={setCurrentPage} />
    </div>
  );
}

export default App;
