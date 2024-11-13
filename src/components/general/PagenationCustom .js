import { useState } from "react";
export const PagenationCustom = (arr , num) => {
    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = num;
    const pagesVisited = pageNumber * productPerPage;
    const displayArr= arr.slice(
        pagesVisited,
        pagesVisited + productPerPage
    );

    const pageCount = Math.ceil(arr.length / productPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return{
        displayArr,
        pageCount,
        changePage
    }
}
