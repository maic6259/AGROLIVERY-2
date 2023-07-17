import React from 'react'

const Card = () => {
  return (
    <>
    <img src="https://picsum.photos/id/1025/367/267" class="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title
      </h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </>
  )
}

export default Card