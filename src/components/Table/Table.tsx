import React, { Key, useState } from 'react'
import { tableProps } from '../../utils/types'
import './Table.scss'

export default function Table({ posts,setdata,rowperpage}: tableProps) {

const [selected,setSelected] = useState<string>('')
  
  const filterData = (e: any) => {
    const data = e.target.value

    console.log(e.target.value)

    /// productlength data filter here
    if (data === "235") {
      const filterData = posts.filter((post: any) => post.product_length_id == data)
      setdata(filterData)
    }

    /// power_name data filter here
    if (data === "0024") {
      const filterData = posts.filter((post: any) => post.power_code === data)
      setdata(filterData)
    }
  }

  const handleChange = (e:any)=>{
    rowperpage(e.target.value)
  }
  

  return (
    <div className="table-container">
      <h1>Pagination</h1>
      <select onChange={handleChange}>
        <option  disabled selected>10</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="9">9</option>
      </select>
      <div className="filter">
        <label  htmlFor="">length_name:</label><button className={selected === "length" ? "selected" : 'filterbtn'}  value="235" onClick={(e) =>{ filterData(e);setSelected("length")}} >1991</button>
        <label htmlFor="">power_name:</label><button className={selected === "power" ? "selected" : 'filterbtn'} value="0024" onClick={(e) =>{ filterData(e);setSelected("power")}}>24</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>length name</th>
            <th>power name</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map((post: { id: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment; cg_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; body: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; length_name: string; power_name: string }, index: Key) => (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.cg_name}</td>
              <td>{post.cg_name}</td>
              <td>{post.length_name}</td>
              <td>{post.power_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

