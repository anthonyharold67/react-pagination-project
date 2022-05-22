import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

const Paginate = ({pages,setCurrentPage}) => {
    // const [pages,setPages]=useState(10)
    const [activePage,setActivePage]=useState(1)

    const numOfPages = []
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    const handleSelect = () => {
        if(activePage === numOfPages.length){
            return
        }else {
            setActivePage(activePage + 1)
        }
    }
    const handleSelectPrev = () => {
        if(activePage === 1){
            return
        }else {
            setActivePage(activePage - 1)
        }
    }

    useEffect(() => {
        setCurrentPage(activePage)
    }, [setCurrentPage,activePage])


   


  return (
    <Pagination>
       {/*  <Pagination.First /> */}
        <Pagination.Prev onClick={()=>handleSelectPrev()} />
        {/* <Pagination.Item>{1}</Pagination.Item> */}
        {
            numOfPages.map((page,index)=>(
                <Pagination.Item key={index} active={page===activePage} onClick={()=>setActivePage(page)}>{page}</Pagination.Item>
            ))
        }
        {/* <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>
        <Pagination.Ellipsis /> */}
        <Pagination.Next  onClick={()=>handleSelect()} />
        {/* <Pagination.Last /> */}
    </Pagination>
  )
}

export default Paginate