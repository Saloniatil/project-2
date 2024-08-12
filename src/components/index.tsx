import React, {useState} from 'react'
import axios from "axios"

type User = {
  userId: string;
  id: string;
  title: string;
  body: string;
};
const urlDummyPost = `https://jsonplaceholder.typicode.com/posts/`;
const header_ = { "app-id": ""}
 
const HelloWorld = () => {
  const [user, setUser] = useState<User>({
    userId: "",
    id: "",
    title: "",
    body: ""
  })

  const setNewValue = (id_: string, newValue: string) =>
    setUser(prevState => ({ ...prevState, [id_]: newValue }));

  const createAnUser = async () => {
    try {
      const response = await axios.post(_url, user, headers_);  
    } catch (exception_) {}
  };
    
  return (
    <>
    <input placeholder="enter userId"
      value={user.userId}
      onChange={(evt => {
        setNewValue("userId", evt.target.value);
        })}
      />

    <br />
      <input
      placeholder="enter id"
      value={user.id}
      onChange={evt => {
        setNewValue("id", evt.target.value);
        }}
      />
      <br />
      <input
      placeholder="enter title"
      value={user.title}
      onChange={evt => {
        setNewValue("title", evt.target.value);
        }}
      />
      <input
      placeholder="enter body"
      value={user.body}
      onChange={evt => {
        setNewValue("body", evt.target.value);
        }}
      />
      <br />
      <button onClick={() => {
        createAnUser();
      }}
      ></button>
   </>
  )
}

export default HelloWorld;