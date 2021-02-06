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
            <h1 className="title">Github commits history viewer</h1>
            <div className="description">
              This is simple react web application which avails github public repository commit history api to retrieve the commits and displays them with a pagination.
            </div>
            <hr />
            <br />
            <div className="howto">
              <h2>How to Use</h2>
              <div className="description">
                let say for example try owner name with <code>jeldikk</code>, and repository name <code>ismartcsv</code>. You will be displayed with a loading spinner displaying the commits of <code>jeldikk/ismartcsv</code> in a paginated manner.
                <br />
                You can even try with owner <code>django</code>, and repository name <code>django</code> to look overs commits made in <code>django/django</code> open source python webframework project
              </div>
              <hr />
              <p className="text-danger">If there is any error in loading commit history, it will print the same intro message on the page</p>
            </div>
        </div>
        : 
        commitList.map((commit) => <CommitDetails key={commit.sha} commitObj={commit} />)
      }
    </div>
  )
}

export default CommitHistory;
