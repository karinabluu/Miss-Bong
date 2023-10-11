import React from 'react';
import styled from 'styled-components'; // 스타일드 컴포넌트 import
// import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import { removeStudent } from "../redux/modules/students";

const CategoryItem = ({ data }) => {
  // const dispatch = useDispatch(); // dispatch 함수 가져오기
  const navigate = useNavigate();
  // const handleDelete = (id) => {
  //   console.log("Deleting student with id:", id);
  //   dispatch(removeStudent(id));
  // };
  return (
    <div>
      {data.map((item) => {
        // "values"를 "item"으로 수정
        const { id, name, school } = item; // 변수 이름 수정
        return (
          <Container key={id}>
            {/* key 속성 추가 */}
            <div>
              {/* "item.id" 대신 "id" 사용 */}{' '}
              <span onClick={() => navigate(`detail/${id}`, { state: item })}>
                ⓘ
              </span>
              &nbsp; <span>{school}</span>
              <h4>{name}</h4> {/* "item.id" 대신 "id" 사용 */}
              {/* "item.name" 대신 "name" 사용 */}
              {/* 삭제하기 버튼을 클릭했을 때 dispatch가 item.id를 리덕스에 전달한다. */}
              {/* <button onClick={() => handleDelete(id)}>삭제하기</button> */}
            </div>
          </Container>
        );
      })}
    </div>
  );
};

export default CategoryItem;

const Container = styled.div`
  // 스타일드 컴포넌트 사용
  border: 3px solid teal;
  border-radius: 8px;
  width: 300px;
  padding: 30px;
  margin: 10px;
`;
