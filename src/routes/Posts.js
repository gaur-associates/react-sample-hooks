import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        let posts = response.data.slice(0, 5);
        setPosts(posts);
      })
      .catch(error => {
        console.error(error);
      });
    return () => {
      console.log("component unmount");
    };
  }, []);

  const h2style = {
    color: "blue",
    fontSize: "x-large",
    textAlign: "center"
  };

  // const displayPosts = this.state.posts.map((x) => {
  //     return (<p key={x.id}> {x.title} </p>)
  // });
  const title = posts.map(x => {
    return <Tab key={x.id}> {x.id} </Tab>;
  });
  const text = posts.map(x => {
    return <TabPanel key={x.id}> {x.title} </TabPanel>;
  });

  const displayPosts = (
    <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
      <TabList>{title}</TabList>
      {text}
    </Tabs>
  );

  return (
    <div>
      <h2 style={h2style}>About Gaur Associates</h2>
      {displayPosts}
    </div>
  );
};
export default Posts;
