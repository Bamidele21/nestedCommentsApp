import React, {useState} from 'react'




function Comment({ comment }) {
    
const [showReplies, setShowReplies] = useState(false)

const [replyText, setReplyText] = useState("")

const [replies, setReplies] = useState (comment.replies || [])

const handleAddReply = () => {

    if (replyText.trim()) {
    setReplies([...replies, {text: replyText, replies: []}])
    setReplyText("");
}
}
    return (
        <div className="comment-wrap">
            {comment.text}
            <button onClick= {()=> setShowReplies(!showReplies)}>{showReplies ? "hide reply": "show reply"} </button>
            {showReplies && (
                <div className="reply-text">
                    <div className ="reply-container">
                    <input type='text'
                    value ={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder = "write a reply here"
                    />
                    <button onClick={handleAddReply}>Reply</button>
                    </div>
                    {replies.map((reply, index) => (
                    <div className="reply-content" key={index}>{reply.text}</div>
                ))}
                    
                </div>
            )}



        </div>

    )
}
export default  Comment