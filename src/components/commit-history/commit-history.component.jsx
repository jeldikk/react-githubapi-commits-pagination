import React from "react";

import "./commit-history.styles.scss";

import CommitDetails from "../commit-details/commit-details.component";

function CommitHistory({ commitList, errorMessage }) {
    // console.log({commitList})
  return (
    <div className="commit-history">
      {
        commitList.length === 0 
        ?
        <div className="empty-data-text">
            <div className="title">Here goes the title</div>
            <div className="description">Here goes the description</div>
            <div className="howto">How to Use it</div>
        </div>
        : 
        commitList.map((commit) => <CommitDetails key={commit.sha} commitObj={commit} />)
      }
    </div>
  )
}

export default CommitHistory;
