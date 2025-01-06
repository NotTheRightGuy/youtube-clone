import { useState } from "react";
import { DislikeIcon, LikeIcon, SortIcon } from "../../assets/icons";
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
                        <SortIcon height={24} width={24} />
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
                                <LikeIcon height={20} width={20} />
                                <span>123</span>
                            </button>
                            <button className="action-btn">
                                <DislikeIcon height={20} width={20} />
                            </button>
                            <button className="action-btn">Reply</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
