import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './home.css'
import React, { useEffect, useRef, useState } from 'react';
import { TimelineLite, Elastic, Power4 } from 'gsap';
import './app.scss'
import '../components/app.scss'

function AddPost() {
  const buttonRef = useRef(null);
  const circlesTopLeftRef = useRef([]);
  const circlesBottomRightRef = useRef([]);

  useEffect(() => {
    const $circlesTopLeft = circlesTopLeftRef.current;
    const $circlesBottomRight = circlesBottomRightRef.current;
    const $button = buttonRef.current;

    const tl = new TimelineLite();
    const tl2 = new TimelineLite();
    const btTl = new TimelineLite({ paused: true });

    tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: Power4.easeOut });
    tl.to($circlesTopLeft[0], 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
    tl.to($circlesTopLeft[1], 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
    tl.to($circlesTopLeft[2], 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
    tl.to($circlesTopLeft[0], 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
    tl.to($circlesTopLeft[1], 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
    tl.to($circlesTopLeft[2], 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

    const tlBt1 = new TimelineLite();
    const tlBt2 = new TimelineLite();

    tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
    tlBt1.add(tl);

    tl2.set($circlesBottomRight, { x: 0, y: 0 });
    tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: Power4.easeOut });
    tl2.to($circlesBottomRight[0], 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
    tl2.to($circlesBottomRight[1], 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
    tl2.to($circlesBottomRight[2], 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
    tl2.to($circlesBottomRight[0], 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
    tl2.to($circlesBottomRight[1], 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
    tl2.to($circlesBottomRight[2], 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

    tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
    tlBt2.add(tl2);

    btTl.add(tlBt1);
    btTl.to($button.querySelector('.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to($button.querySelector('.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

    btTl.timeScale(2.6);

    const handleMouseOver = () => {
      btTl.restart();
    };

    $button.addEventListener('mouseover', handleMouseOver);

    return () => {
      $button.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  ///////////animated button code is upto here //////
  axios.defaults.withCredentials = true;

  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting Post:', post);  // Log the post data to check what is being submitted

    try {
      const result = await fetch('http://localhost:3032/posts', {
        method: 'POST',  // Specify the request method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),  // Convert the `post` object to a JSON string
      });
    
      // Check if the request was successful
      if (result.status === 201) { // 201 Created
        navigate('/home');
      } else {
        alert('Failed to add post');
      }
    } catch (err) {
      console.error('Error occurred while adding the post:', err);
      alert('An error occurred while adding the post.');
    }
  };

  const handleClick = () => {
    Swal.fire("Message: Your messae saved Successfully");
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center"><b> Add Post</b></h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label"><strong>ID</strong> </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter ID"
              value={post.id}
              onChange={(e) => setPost({ ...post, id: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="UserId" className="form-label"><strong>User ID</strong> </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="UserId"
              placeholder="Enter User ID"
              value={post.userId}
              onChange={(e) => setPost({ ...post, userId: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label"><strong>Title</strong> </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Title"
              autoComplete="off"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label"><strong>Description:</strong> </label>
            <textarea  className="textbox" rows="4" cols="96" maxlength="10000"
              type="text"
              placeholder="Enter Description"
              autoComplete="off"
              value={post.body}
              onChange={(e) => setPost({ ...post, body: e.target.value })}>
            </textarea> 
          </div>
          <br></br>
          <div className="col-12 ">
            <div  onClick={handleClick} style={{size:"40%"}}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <span className="button--bubble__container" ref={buttonRef}>
        <a href="#campaign" className="button button--bubble">
           Submit
        </a>
        <span className="button--bubble__effect-container">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="circle top-left" ref={el => (circlesTopLeftRef.current[i] = el)}></span>
            ))}

          <span className="button effect-button"></span>

          {Array(3)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="circle bottom-right" ref={el => (circlesBottomRightRef.current[i] = el)}></span>
            ))}
        </span>
      </span>
       </div>  
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
