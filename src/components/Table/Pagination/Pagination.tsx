import React, { useState } from 'react'
import { paginationProps } from '../../../utils/types';
import './Pagination.scss'

export default function Pagination({ totalPages, postsPerPage, activePage, currentpage }: paginationProps) {
  const [pagenolimit,setPagenolimit] = useState<number>(5)
  const [minimumpagelimit,setMinimumpagelimit] = useState<number>(0)
  const [maximumpagelimit,setMaximumpagelimit] = useState<number>(5)

  const pageNumbers = [];
  console.log("total",totalPages)
  for (let i =1 ; i <= Math.ceil(totalPages / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
    <ul className="pagination">
      {pageNumbers && pageNumbers.map((number: number) => (
          <li className={(currentpage === number) ? 'page-item selected' : ''} onClick={() => activePage(number)} key={number} >
          {number}
        </li>
      ))}
    </ul>
  )

}