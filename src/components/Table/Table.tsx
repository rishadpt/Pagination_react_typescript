import React, { Key } from 'react'
import { tableProps } from '../../utils/types'
import './Table.scss'

export default function Table({ posts, loading }: tableProps) {
  if (loading) {
    return <h2>LOADING ...</h2>
  }

 const filterData =(data : string | number) =>{
    if(data === 1991){
      data = 1991 
    }
    if (data === 24){
      data = 24
    }
    console.log(data)
    const filterData = posts.filter((post:any) => post.product_length_id === data)

    console.log("filtered",filterData[0])
   

  }

  return (
    <div className="table-container">
       <h1>Pagination</h1>
       <select>
         <option disabled selected>10</option>
         <option>2</option>
         <option>5</option>
          <option>8</option>
         
         
       </select>
       <div className="filter">
         <label htmlFor="">length_name:</label><button onClick={()=>filterData(1991)} >1991</button>
         <label htmlFor="">power_name:</label><button onClick={()=>filterData(24)}>24</button>
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
        {posts && posts.map((post: { id: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment ; cg_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; body: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;length_name :string ;power_name: string },index:Key) => (
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

