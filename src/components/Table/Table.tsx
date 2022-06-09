import { Console } from 'console'
import React, { Key, useEffect, useState } from 'react'
import { tableProps } from '../../utils/types'
import './Table.scss'

export default function Table({ posts, setdata, rowperpage,filter,activePage }: tableProps) {
  const [length, setLength] = useState<string>('')
  

  console.log(filter)

  const filterData = (e: any) => {
    setdata(filter)
    console.log(filter,"its filter")
    const filterData = filter.filter((post: any) => post.studentclass === length)
    setdata(filterData)
  }
const Reset = () => {
  rowperpage(2)
  alert("its set to default 2 Row per page")
}

  const handleChange = (e: any) => {
    rowperpage(e.target.value)
    activePage(1)
  }

  return (
    <div className="table-container">
      <h1>Pagination</h1>
      <div className="rowper">
        <p className="filterbtn" onClick={Reset}>RESET</p>
        <label >Rows per page</label>
        <select id="select" onChange={handleChange}>
        <option disabled selected>2</option>
          <option value="5">5</option>
          <option value="9">9</option>
          <option value="10" >10</option>
        </select>
      </div>
      <div className="filter">
        {/* <label >length_name:</label><button className={selected === "length" ? "selected" : 'filterbtn'} value="235" onClick={(e) => { filterData(e); setSelected("length") }} >1991</button> */}
        <label>class</label><input onChange={(e)=>{setLength(e.target.value)}} value={length} name="length" type="text" /><button onClick={filterData} >Apply</button>
        
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>class</th>
            <th>subject</th>
            <th>percentage</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map((post: { studentid: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; studentclass: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; studentsubject: string; studentpercentage: string }, index: Key) => (
            <tr key={index}>
              <td>{post.studentid}</td>
              <td>{post.name}</td>
              <td>{post.studentclass}</td>
              <td>{post.studentsubject}</td>
              <td>{post.studentpercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

