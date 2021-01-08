import React from "react";

import ReactPaginate from "react-paginate";

import "./pagination.styles.scss"

const Pagination = ({ ...otherProps }) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        {...otherProps}
        containerClassName="pagination pagination-md"
        pageClassName="page-item"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
      />
    </div>
  );
};

export default Pagination;
