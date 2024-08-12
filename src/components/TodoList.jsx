import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';


function TodoList( { todos } ) {
  return ( 
    <Table striped bordered hover> 
      <thead> 
        <tr>
        <th className='bg-dark' style={{color: "white"}}> Title  </th>
        <th className='bg-dark' style={{color: "white"}} >Description</th>
        <th className='bg-dark' style={{color: "white"}}>Actions</th>
        </tr>
      
      {todos.map((todo) =>
      <tr> 
      <td className="list-group-item d-flex justify-content-between align-items-center">
        {todo.title}</td>
          <td>{todo.body}</td>
          <td>   <Button variant="outline-info"><AddIcon /></Button>{' '}
                 <Button variant="outline-dark">< VisibilityIcon /></Button>{' '}
          </td>
      </tr>
    )}
         
        </thead>
      </Table>
    // <div>todo Component</div>
  )
}

export default TodoList