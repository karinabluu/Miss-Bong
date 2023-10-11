import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../util/token';
import { checkoutUserToken } from '../util/checkoutUserToken';
import * as St from '../styles/styles';

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/');
    }
  }, []);

  const logOutHandler = async () => {
    await checkoutUserToken();
    navigate('/');
  };

  return (
    <St.MainContainer>
      <St.Nav>
        <St.MainTitle>학생현황</St.MainTitle>
        <St.Button buttontheme="thirdy" onClick={logOutHandler}>
          로그아웃
        </St.Button>
      </St.Nav>
      <St.Row>
        <St.MainButton>
          <St.MainSubTitle>초등</St.MainSubTitle>
          <St.MainText>09</St.MainText>
        </St.MainButton>
        <St.MainButton>
          <St.MainSubTitle>중등</St.MainSubTitle>
          <St.MainText>37</St.MainText>
        </St.MainButton>
        <St.MainButton>
          <St.MainSubTitle>고등</St.MainSubTitle>
          <St.MainText>11</St.MainText>
        </St.MainButton>
      </St.Row>
    </St.MainContainer>
  );
}
