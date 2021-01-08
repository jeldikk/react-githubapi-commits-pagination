import React from 'react'

import {Card} from 'react-bootstrap'

import "./commit-details.styles.scss"

function CommitDetails({commitObj}) {

    const {commit:{message},author:{login}} = commitObj;
    console.log(commitObj)

    return (
        <Card className="commit-details shadow-lg">
            <Card.Header>
                {login}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {message}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CommitDetails
