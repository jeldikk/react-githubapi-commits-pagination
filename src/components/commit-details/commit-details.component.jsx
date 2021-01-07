import React from 'react'

import "./commit-details.styles.scss"

function CommitDetails({commitObj}) {

    const {commit:{message}} = commitObj

    return (
        <div className="commit-details">
            {message}
        </div>
    )
}

export default CommitDetails
