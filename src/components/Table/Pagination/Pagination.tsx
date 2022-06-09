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

  const getPaginationGroup = () => {
    let start = Math.floor((currentpage - 1) / pagenolimit) * pagenolimit;
    return new Array(pagenolimit).fill(undefined).map((_, idx) => start + idx + 1);
  };

  function changePage(e:any) {
    const pageNumber = Number(e.target.textContent);
    console.log(pageNumber)
   activePage(pageNumber);
  }
  function goToNextPage() {
    console.log(totalPages)
    if (currentpage< totalPages/postsPerPage  ) {
      activePage(currentpage + 1);
    }
  }
  function goTobackPage() {
    if(currentpage > 1){
    activePage( currentpage - 1);
    }
  }

  console.log(postsPerPage)
  return (
    
    <ul className="pagination">
        <p onClick={goTobackPage}>Previous Page</p>
       {getPaginationGroup().map((number: number) => (
          <li 
          style={{display:`${totalPages/postsPerPage+1 <= number && 'none' }`}} className={(currentpage === number) ? 'page-item selected' : ''} onClick={(e) =>{ changePage(e)}} key={number} >
          { number}
        </li>
      ))}
      <p style={{display:`${currentpage === totalPages/postsPerPage ? 'none' : 'block' }`}} onClick={goToNextPage}>NEXT PAGE</p>
    </ul>
  )

}