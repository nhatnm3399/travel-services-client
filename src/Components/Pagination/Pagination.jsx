import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const PaginationPage = ({count, activePagination}) => {
  return (
    <div className={"fsjkdfjskfljkdasda"} style={{height: 50, direction: "rtl"}}>
        {
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{7}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
        }
    </div>
  )
}

export default PaginationPage
