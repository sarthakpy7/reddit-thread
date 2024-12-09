import React from 'react';
import styled from 'styled-components';

const ReplyWrapper = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

const ReplyHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ReplyBody = styled.p`
  margin-top: 5px;
  font-size: 12px;
`;

const Reply = ({ reply }) => {
  return (
    <ReplyWrapper>
      <ReplyHeader>{reply.username}</ReplyHeader>
      <ReplyBody>{reply.body}</ReplyBody>
    </ReplyWrapper>
  );
};

export default Reply;
