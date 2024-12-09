import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp, FaArrowDown, FaShareAlt, FaReply, FaEllipsisH, FaMedal } from 'react-icons/fa'; // FaMedal for the new award icon

const PostWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UsernameAndTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Time = styled.span`
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
  gap: 5px;
  &::before {
    content: '•';
    color: #ccc;
    font-size: 18px;
  }
`;

const PostBody = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #888;
  padding: 5px;

  &:hover {
    color: #555;
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 5px;
  }
`;

const ShowRepliesButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #888;
  margin-top: 5px;
  display: block;
  text-align: left;

  &:hover {
    color: #555;
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 5px;
  }
`;

const CommentWrapper = styled.div`
  margin-left: 40px;
  margin-top: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
`;

const Post = ({ post }) => {
  const [isRepliesVisible, setRepliesVisible] = useState({});

  const toggleReplies = (index) => {
    setRepliesVisible(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <PostWrapper>
      <PostHeader>
        <ProfileImage src={post.profileImage} alt="Profile" />
        <UsernameAndTime>
          <Username>{post.username}</Username>
          <Time>{post.time}</Time>
        </UsernameAndTime>
      </PostHeader>
      <PostBody>{post.body}</PostBody>
      <PostFooter>
        <IconButton>
          <FaArrowUp /> 10
        </IconButton>
        <IconButton>
          <FaArrowDown /> 3
        </IconButton>
        <IconButton>
          <FaReply /> Reply
        </IconButton>
        <IconButton>
          <FaMedal /> 1  {/* This is the award icon */}
        </IconButton>
        <IconButton>
          <FaShareAlt /> Share
        </IconButton>
        <IconButton>
          <FaEllipsisH />
        </IconButton>
      </PostFooter>

      {/* Warthog comments section with dynamic show/hide replies */}
      {post.comments.map((comment, index) => (
        <div key={index}>
          <CommentWrapper>
            <PostHeader>
              <ProfileImage src={comment.profileImage} alt="Profile" />
              <UsernameAndTime>
                <Username>{comment.username}</Username>
                <Time>{comment.time}</Time>
              </UsernameAndTime>
            </PostHeader>
            <PostBody>{comment.body}</PostBody>
            <PostFooter>
              <IconButton>
                <FaArrowUp /> 5
              </IconButton>
              <IconButton>
                <FaArrowDown /> 1
              </IconButton>
              <IconButton>
                <FaReply /> Reply
              </IconButton>
              <IconButton>
                <FaMedal /> 0
              </IconButton>
              <IconButton>
                <FaShareAlt /> Share
              </IconButton>
              <IconButton>
                <FaEllipsisH />
              </IconButton>
            </PostFooter>

            {/* Show or Hide Replies Button */}
            <ShowRepliesButton onClick={() => toggleReplies(index)}>
              {isRepliesVisible[index] ? '− Hide Replies' : '+ Show Replies'}
            </ShowRepliesButton>

            {/* Display Replies if Visible */}
            {isRepliesVisible[index] && comment.comments && (
              <div style={{ marginLeft: '20px' }}>
                {comment.comments.map((reply, replyIndex) => (
                  <div key={replyIndex}>
                    <PostHeader>
                      <ProfileImage src="https://randomuser.me/api/portraits/men/3.jpg" alt="Profile" />
                      <UsernameAndTime>
                        <Username>{reply.username}</Username>
                        <Time>{reply.time}</Time>
                      </UsernameAndTime>
                    </PostHeader>
                    <PostBody>{reply.body}</PostBody>
                  </div>
                ))}
              </div>
            )}
          </CommentWrapper>
        </div>
      ))}
    </PostWrapper>
  );
};

export default Post;
