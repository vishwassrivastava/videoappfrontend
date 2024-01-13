import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", { name, email, password });
      setEmail("");
      setName("");
      setPassword("");
      setMessage("Registered successfully, please signin!");
    } catch (err) {
      setMessage("Registration failed!");
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post("/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
            navigate("/");
          });
      })
      .catch((err) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Signin</Title>
        <SubTitle>to continue to GLadTube</SubTitle>
        <Input
          placeholder="username"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
        <Title>or</Title>
        <Input
          placeholder="username"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div>{message}</div>
        <Button onClick={handleRegister}>Sign up</Button>
      </Wrapper>
      <More>
        Englsh(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textSoft};
`;
const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
`;
