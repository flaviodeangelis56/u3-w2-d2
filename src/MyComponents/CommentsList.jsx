import SingleComment from "./SingleComment";
import AddComments from "./AddComment";
import { ListGroup } from "react-bootstrap";

const CommentsList = props => {
  return (
    <>
      <ListGroup>
        {props.comArr.map((comObj, i) => (
          <SingleComment comment={comObj} key={i} />
        ))}
      </ListGroup>
      <AddComments asinSelected={props.asinSelected} />
    </>
  );
};
export default CommentsList;
