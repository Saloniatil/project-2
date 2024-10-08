import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
function Loading() {
  return (
  <div className='position-absolute top-50 start-50'>
    <Spinner animation="border" variant="primary" />
  </div>
  )
}

export default Loading;