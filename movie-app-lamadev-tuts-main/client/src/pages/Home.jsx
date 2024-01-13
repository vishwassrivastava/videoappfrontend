import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
       await axios.get(`/videos/${type}`)
      .then((res) => {
        console.log(res.data);
        setVideos(res.data);
      }
      )
      .catch((err) => {
        console.log(err.message);
      });
    
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
`;
