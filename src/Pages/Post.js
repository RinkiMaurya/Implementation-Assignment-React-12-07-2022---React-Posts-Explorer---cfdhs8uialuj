import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Loader from "../components/Loader";

/*
    On clicking link in PostPreview component navigate to /post/:id, which shows the Post Page.
    Post Page has following requirements:
    1) Make a request to <code>https://jsonplaceholder.typicode.com/posts/:id</code> to get the post. <br/>
    2) The returned post will have property <code>userId</code> which will be used to make a request to <code>https://jsonplaceholder.typicode.com/users/:userId</code> to get the user. <br/>
    3) While both the requests are in progress, display a <code>Loader</code> component. <br/>
    4) Once both the requests are complete, display the information in following manner
        <ul>
            <li> <code>h1</code> with class <code>post-id</code> and text as <code>Post id:- {id}</code> </li>
            <li> <code>h2</code> with class <code>post-title</code> and text as <code>{post.title}</code> </li>
            <li> <code>p</code> with class <code>post-body</code> and text as <code>{post.body}</code> </li>
            <li> <code>p</code> with class <code>post-author</code> and text as <code>{user.name}</code> (use name property from user object)</li>
            <li> <code>NavLink</code> to <code>/</code> with text as <code>Back to Home</code> which takes to Index page </li>
        </ul>
 */
export const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [authorName, setAuthor] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        fetch("https://jsonplaceholder.typicode.com/users/" + json.userId)
          .then((response) => response.json())
          .then((author) => {
            setAuthor(author.name);
          })
          .catch((err) => console.log(err));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div id="post">
      <h1 className="post-id">Post id:- {data.id}</h1>
      <h2 className="post-title">{data.title}</h2>
      <p className="post-body">{data.body}</p>
      <p className="post-author">{authorName}</p>
      <NavLink to="/">Back Home</NavLink>
    </div>
  );
};
