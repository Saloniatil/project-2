 

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

       for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
          }

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);  
    const limit = 10;  

    
     
    return (
        <nav>
            <ul className="pagination">
                {loading ? (
                    <p>Loading</p>
                ) : (
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                )}
                <div>
 
                </div>
            </ul>
        </nav>
    );
};

export default Pagination;

// import React from 'react';

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map(number => (
//           <li key={number} className='page-item'>
//             <a onClick={() => paginate(number)}  className='page-link'>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
