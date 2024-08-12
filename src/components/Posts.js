import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Posts = ({ posts }) => {
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });

  const [open, setOpen] = useState(false);
  const [viewData, setViewData] = useState(null);
  // To get user by id

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const viewdatafn = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3032/posts/${id}`);
      setViewData(res.data);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  return (
    <Table striped border hover>
      <thead>
        <tr>
          <th className='bg-dark' style={{ color: "white" }}>Title</th>
          <th className='bg-dark' style={{ color: "white" }}>Description</th>
          <th className='bg-dark' style={{ color: "white" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className='list-group-item d-flex justify-content-between align-items-center'>
              {post.title}
            </td>
            <td>{post.body}</td>
            <td>
              <Link to={`/addpost`} className='btn btn-info btn-md me-2'>
                <AddIcon />
              </Link>
              <Button variant="outline-dark" onClick={() => viewdatafn(post.id)}>
                <VisibilityIcon />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    <h5><b>User Details</b></h5>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {viewData && (
                      <>
                        <b>Id:</b> {viewData.id} <br />
                        <b>UserId:</b> {viewData.userId} <br />
                        <b>Title:</b> {viewData.title} <br />
                        <b>Body:</b> {viewData.body} <br />
                      </>
                    )}
                  </Typography>
                </Box>
              </Modal>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Posts;

 
