import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import './Pagenation.css'


function SinglePagenation({pageCount,changePage}) {
    
    return (
        <>
            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                pageRangeDisplayed = {1}
                initialPage= {0}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>
    )
}

export default SinglePagenation;
