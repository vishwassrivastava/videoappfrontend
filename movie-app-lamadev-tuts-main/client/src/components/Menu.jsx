import styled from "styled-components";
import GLadTube from "../img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../redux/userSlice";

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="w-[10px] h-[5px]">
            <Logo>
              <Img
                className="mr-[50px]"
                src="data:image/png;base64,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"
              />
              Video App
            </Logo>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            <div className="w-[5px]">Home</div>
          </Item>
        </Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />

        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Link to="History" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>
        </Link>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>Best of VideoApp</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
      {currentUser && (
        <Wrapper>
          <Item onClick={handleLogout}>
            <LogoutIcon />
            Logout
          </Item>
        </Wrapper>
      )}
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 120vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
  background-color: ${({ theme }) => theme.bg};
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
