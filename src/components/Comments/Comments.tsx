import { useState } from "react";
import "./styles.css";

export default function Comments() {
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const commentsCount = "1.2K";

    return (
        <div className="comments-section">
            <div className="comments-header">
                <h2>{commentsCount} Comments</h2>
                <div className="comments-sort">
                    <button className="sort-button">
                        <svg height="24" viewBox="0 0 24 24" width="24">
                            <path d="M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z"></path>
                        </svg>
                        Sort by
                    </button>
                </div>
            </div>

            <div className="add-comment">
                <img
                    src="https://yt3.ggpht.com/ytc/AIdro_meZQDvkVwIytlz05tUr4sKYRoxduo30MYm6fDWZDFwo5Dx5x44u4bpmQY2f_R4uW4yGQ=s88-c-k-c0x00ffffff-no-rj"
                    alt="User avatar"
                    className="user-avatar"
                />
                <div className="comment-input-container">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        onFocus={() => setIsCommentOpen(true)}
                        className="comment-input"
                    />
                    {isCommentOpen && (
                        <div className="comment-actions">
                            <button
                                className="cancel-btn"
                                onClick={() => setIsCommentOpen(false)}
                            >
                                Cancel
                            </button>
                            <button className="comment-btn" disabled>
                                Comment
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="comments-list"></div>
            {[1, 2, 3].map((_, index) => (
                <div key={index} className="comment">
                    <img
                        src="https://yt3.ggpht.com/ytc/AIdro_meZQDvkVwIytlz05tUr4sKYRoxduo30MYm6fDWZDFwo5Dx5x44u4bpmQY2f_R4uW4yGQ=s88-c-k-c0x00ffffff-no-rj"
                        alt="Commenter avatar"
                        className="user-avatar"
                    />
                    <div className="comment-content">
                        <div className="comment-header">
                            <span className="commenter-name">User Name</span>
                            <span className="comment-time">2 days ago</span>
                        </div>
                        <p className="comment-text">
                            This is a sample comment. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.
                        </p>
                        <div className="comment-actions-row">
                            <button className="action-btn">
                                <svg height="16" viewBox="0 0 16 16" width="16">
                                    <path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H2V7.08H6L9.89,3.14Z"></path>
                                </svg>
                                <span>123</span>
                            </button>
                            <button className="action-btn">
                                <svg height="16" viewBox="0 0 16 16" width="16">
                                    <path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86A.51.51,0,0,1,5.71,13a.28.28,0,0,1-.24-.09S7,9.06,7,9.06L7.54,8H2S3,3.35,3,3.35A.58.58,0,0,1,3.54,3H14V8.92H10L6.07,12.86Z"></path>
                                </svg>
                            </button>
                            <button className="action-btn">Reply</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
