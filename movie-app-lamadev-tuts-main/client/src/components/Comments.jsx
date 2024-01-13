import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        await axios.get(`/comments/${videoId}`)
          .then((res) => {
            console.log(res.data);
            setComments(res.data);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
      fetchComments();
    }});

  return (
    <Container>
      <NewComment>
        <Avatar
          src={
            currentUser?.img ||
            "https://herrmans.eu/wp-content/uploads/2019/01/765-default-avatar.png"
          }
        />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  padding: 5px;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
