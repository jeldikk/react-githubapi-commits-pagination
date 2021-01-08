import React from 'react'

import "./with-spinner.styles.scss"

const withSpinner = (ComponentToBeWrapped) => {

    return ({isLoading, ...otherProps}) => {

        return isLoading ? (
            <div className="spinner-container">
                <div className="spinner spinner-border text-success">
                    <span className="sr-only">Loading ...</span>
                </div>
            </div>
            ) : (<ComponentToBeWrapped {...otherProps} />)
        
        }

}

export default withSpinner
