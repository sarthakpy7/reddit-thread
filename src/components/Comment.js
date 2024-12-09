import React from 'react';
import styled from 'styled-components';
import { FaArrowUp, FaArrowDown, FaReply, FaShareAlt, FaEllipsisH } from 'react-icons/fa';

const CommentWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const CommentBody = styled.p`
  font-size: 15px;
  color: #333;
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: flex-start;  /* Align icons to the left */
  align-items: center;
  margin-top: 10px;
  gap: 10px;  /* Add consistent spacing between icons */
`;

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
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

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <CommentBody>{comment.body}</CommentBody>
      <CommentFooter>
        <IconButton>
          <FaArrowUp /> 5
        </IconButton>
        <IconButton>
          <FaArrowDown /> 1
        </IconButton>
        <IconButton>
          <FaReply />
        </IconButton>
        <IconButton>
          <FaShareAlt />
        </IconButton>
        <IconButton>
          <FaEllipsisH />
        </IconButton>
      </CommentFooter>
    </CommentWrapper>
  );
};

export default Comment;
