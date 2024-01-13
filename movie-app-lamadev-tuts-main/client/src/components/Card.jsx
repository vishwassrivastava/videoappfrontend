import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  const timeago = moment(video.createdAt).fromNow();

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to={`/videos/find/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={
              channel?.img ||
              "https://herrmans.eu/wp-content/uploads/2019/01/765-default-avatar.png"
            }
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel?.name}</ChannelName>
            <Info>
              {video.views} views • {timeago}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  cursor: pointer;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
