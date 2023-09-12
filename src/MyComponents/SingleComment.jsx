import { Button } from "react-bootstrap";

const SingleComment = props => {
  const removeComment = async () => {
    try {
      await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.comment._id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <li>{props.comment.comment}</li>
      <li>{props.comment.rate}</li>
      <Button onClick={removeComment}>Remove</Button>
    </>
  );
};
export default SingleComment;
