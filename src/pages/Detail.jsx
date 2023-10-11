import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state;
  const id = String(student.id).slice(0, 5); //아이디가 길어서 5자리까지만 나오게 잘라주심

  return (
    <Container>
      <TodoContainer>
        <Header>
          <div>ID : {id}</div>
          <span onClick={() => navigate(-1)}>이전 페이지</span>
        </Header>
        <Title>{student.name}</Title>
        <Content>{student.school}</Content>
      </TodoContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: calc(50vh / 10);
  border-bottom: 1px solid gray;

  div {
    font-weight: 500;
  }

  span {
    cursor: pointer;
    margin-left: 20px;
    font-weight: 600;
    padding: 0.5rem;
  }
`;

const TodoContainer = styled.div`
  width: 50%;
  height: 50vh;
  background-color: #ebeef2;
  border-radius: 10px;
  padding: 1rem;
`;

const Title = styled.div`
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
  background-color: #ebeef2;
  padding: 10px;
  border-radius: 10px;
`;

const Content = styled.div`
  background-color: white;
  height: calc(50vh / 2);
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
`;
