import React from 'react'
import PropTypes from 'prop-types'
const Jumbotron = (props) => {
    return (
        <>
            <div className="container bg-secondary m-2">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button className="btn btn-primary">{props.label}</button>
            </div>
        </>
    )
}
Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string
}

export default Jumbotron
