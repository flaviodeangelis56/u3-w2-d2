import { Component, useState } from "react";
import SingleComment from "./SingleComment";
import AddComments from "./AddComment";

const CommentsList = props => {
  return (
    <>
      <ul>
        {props.comArr.map((comObj, i) => (
          <SingleComment comment={comObj} key={i} />
        ))}
      </ul>
      <AddComments asinSelected={props.asinSelected} />
    </>
  );
};
export default CommentsList;
