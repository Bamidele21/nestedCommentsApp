import React, {useState} from "react";
import Comment from "./Comment";
;


function CommentSection() {


     const [comments, setComments] = useState([
        {text: 'this is the first comment!', replies:[]},
        {text: 'this is comment is better then the first comment!', replies:[]},
        {text: 'this comment is just chilling', replies:[]},
     ]);
     
     const [newCommentText, setNewCommentText] = useState ("")
     
     const handleCommentSubmit = () => {
        console.log(newCommentText);
        if (newCommentText.trim()) {
            setComments([...comments, {text: newCommentText, replies: []}])
            setNewCommentText("");
        }

     }
     
             
     
    return (
        <>
        <div className="content-wrapper">
        <div className="Input-text">
        <textarea 
        value = {newCommentText}
        onChange={(e) => setNewCommentText(e.target.value) }
        placeholder= "Leave a Comment!"
        />
        <button className="submit" onClick={handleCommentSubmit}>Submit</button>
        </div>
        {comments.map((comment, index)=>(

            <Comment key={index} comment={comment}/>
        ))}
        </div>
        


        
        
        
        </>
    )
}

export default CommentSection;