import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../util/token';
import { getToken } from '../util/token';
import * as St from '../styles/styles';

export default function LoginPage() {
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate('/main');
    }
  }, []);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const response = await axios.get('http://3.38.191.164/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response.data.message, response);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://3.38.191.164/login', {
        id,
        password,
      });
      console.log(response.statusText, response);
      // console.log(response.config.data);

      if (response.status === 201) {
        setToken(response.data.token);
        checkUser();
        navigate('/main');
      }
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  return (
    <St.LoginContainer>
      <St.Header>
        {/* <img src="img/lycos.webp" alt="img" style={{ width: "300px" }} /> */}
        <St.LoginSubTitle>손쉬운 학생관리</St.LoginSubTitle>
        <St.LoginTitle>봉티쳐</St.LoginTitle>
      </St.Header>
      <St.Body>
        <St.PostWrap>
          <St.Row>
            <St.LoginText>아이디</St.LoginText>{' '}
            <St.InputId
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </St.Row>
          <St.Row>
            <St.LoginText>비밀번호</St.LoginText>{' '}
            <St.InputPw
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </St.Row>
        </St.PostWrap>
        <St.BtnWrap>
          <St.Button buttontheme="thirdy" onClick={onLoginHandler}>
            로그인
          </St.Button>
          <St.Button
            buttontheme="thirdy"
            onClick={() => {
              navigate('/join');
            }}
          >
            회원가입
          </St.Button>
        </St.BtnWrap>
      </St.Body>
    </St.LoginContainer>
  );
}
