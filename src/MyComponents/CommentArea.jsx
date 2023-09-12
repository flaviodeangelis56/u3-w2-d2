import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { Alert, Spinner } from "react-bootstrap";

const CommentArea = props => {
  const [isLoading, setIsloading] = useState(true);
  const [commentsArr, setCommentsArr] = useState([]);
  const [error, setError] = useState(false);

  const commentFetch = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
      if (resp.ok) {
        const commentsArr = await resp.json();
        const filteredComments = commentsArr.filter(comment => comment.elementId === props.asinSelected);
        setCommentsArr(filteredComments);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    commentFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asinSelected]);

  return (
    <>
      {error && <Alert variant="danger">Si è verificato un errore durante fetch</Alert>}
      {isLoading && <Spinner animation="grow" variant="danger" />}
      {props.asinSelected && !isLoading ? (
        <CommentsList comArr={commentsArr} elementId={props.asinSelected} asinSelected={props.asinSelected} />
      ) : (
        !isLoading && "seleziona un libro per vedere i suoi commenti"
      )}
    </>
  );
};
export default CommentArea;
