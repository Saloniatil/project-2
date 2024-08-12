import React, { useEffect, useState } from 'react'
import axios from 'axios'

function JsonServer() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3032/posts')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container mt-5'> 
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return <tr key={i}>
              <td>{d.id}</td>
              <td>{d.userId}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
             </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default JsonServer