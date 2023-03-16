import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import 
function Comment() {
  const [comments, setComments] = useState(["Add Comments"]); // all comments
  const [comment, setComment] = useState(""); 
  const [visible, setvisible] = useState(false);
  const [curr, setCurr] = useState();
  const [currComment, setCurrComment] = useState("");

  const AddComment = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  const deleteComment = (ind) => {
    const list = comments;
    list.splice(ind, 1);
    setComments([...list]);
    // setComments(list); INCORRECT WAY
  };

  const postEditedComment = (ind) => {
    let a = comments;
    a.splice(ind, 1, currComment); //to replace
    setCurrComment("");
    setvisible(!visible);
  };

  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
          alt=""
        />

        <div style={{ margin: "12px 0px" }}>
          <form
            action="/"
            onSubmit={(e) => {
              AddComment(e);
            }}
          >
            {/* <input
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            /> */}
            <TextField id="outlined-size-small"  defaultValue="Small" size="small" label="Add Comment" variant="outlined" value={comment}
            
              onChange={(e) => {
                setComment(e.target.value);
              }} />
            {/* <button type="submit"> Add Comment </button> */}
            <Button  type="submit" variant="outlined">Add Comment</Button>
          </form>
        </div>

        <div>
          {comments.map((comment, ind) => {
            return (
              <div key={ind}>
                <Typography variant="h4" component="h4">{comment}</Typography>
              
                <Button onClick={() => { setvisible(!visible); setCurr(ind); }} type="submit" variant="outlined">Edit</Button>
                <Button onClick={() => { deleteComment(ind); }} type="submit" variant="outlined">
                  Delete
                </Button>

                <div>
                  {visible && ind === curr && (
                    <form
                      onSubmit={() => {
                        postEditedComment(ind);
                      }}
                    >
                      <TextField id="outlined-size-small"  defaultValue="Small" size="small" label="Edit Comment" variant="outlined"  value={currComment} onChange={(e) => {
                          setCurrComment(e.target.value); }}
                      />
                      <button type="submit"> post </button>
                    </form>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment;
