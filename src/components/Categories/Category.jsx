import React, { useState } from 'react';
import Categories from './Categories';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import CategoryItem from './CategoryItem';
// import { addStudent } from '../redux/modules/students';

const Category = () => {
  const [data, setData] = useState(Categories);

  const filterResult = (cateItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === cateItem;
    });
    setData(result);
  };

  // useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // // "Add" button click handler
  // const handleAddStudent = () => {
  //   // Create a new student data (remove the name and content parts)
  //   const newStudent = {
  //     id: uuid(),
  //     isDone: false,
  //   };

  //   // Call the addStudent action in Redux to add the new student data
  //   dispatch(addStudent(newStudent));
  // };

  return (
    <>
      <Container>
        <div>
          <button type="button" onClick={() => setData(Categories)}>
            All
          </button>
          <button type="button" onClick={() => filterResult('ele')}>
            Element
          </button>
          <button type="button" onClick={() => filterResult('mid')}>
            Middle
          </button>
          <button type="button" onClick={() => filterResult('high')}>
            High
          </button>
        </div>
        <div>
          <AddButton>추가하기</AddButton>
        </div>
      </Container>
      <CategoryItem data={data} />
    </>
  );
};

export default Category;

const Container = styled.div`
  background-color: #ffffff;
  padding: 18px 40px 30px 40px;
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
  background-color: #0777d9;
  color: white;
  border: none;
  width: 140px;
  height: 40px;
  cursor: pointer;
`;

// Add the code for CategoryItem here, or import it as needed.
