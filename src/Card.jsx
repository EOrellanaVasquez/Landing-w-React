import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {

  return (
    <>
        <div className="card m-1" style={{ width: "18rem" }}>
          <img src={(`https://picsum.photos/id/${props.imagen}/300/300`)} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className={props.title}></h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">{props.label}</a>
          </div>
        </div>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  imagen: PropTypes.string
}

export default Card
