import { v4 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    name: '김새롬',
    school: '남녕고',
    category: 'high',
    image: '../images/IMG_1262.jpeg',
  },
  {
    id: uuid(),
    name: '고하귀',
    school: '하귀초',
    category: 'ele',
    image: '../images/IMG_1262.jpeg',
  },
  {
    id: uuid(),
    name: '홍길동',
    school: '서중',
    category: 'mid',
    image: '../images/IMG_1262.jpeg',
  },
];

const STUDENT_ADD = 'students/STUDENT_ADD';
const STUDENT_UPDATE = 'students/STUDENT_UPDATE';
const STUDENT_REMOVER = 'students/STUDENT_REMOVER';

export const addStudent = (payload) => {
  return { type: STUDENT_ADD, payload };
};

export const updateStudent = (payload) => {
  return { type: STUDENT_UPDATE, payload };
};

export const removeStudent = (payload) => {
  return { type: STUDENT_REMOVER, payload };
};

const students = (state = initialState, action) => {
  switch (action.type) {
    //todo 추가할 때
    case STUDENT_ADD:
      state = [...state, action.payload];
      return state;

    //todo 지울 때
    case STUDENT_REMOVER:
      //Todo 컴포넌트로부터 받은 id를 이용해서 id와 일치하지 않는 todo들을 반환
      //action.payload: Todo 컴포넌트로부터 받은 id
      return state.filter((student) => {
        return student.id !== action.payload;
      });

    //todo 상태를 변경할 때: 완료 -> 취소, 취소 -> 완료
    case STUDENT_UPDATE:
      return state.map((student) => {
        if (student.id === action.payload) {
          return { ...student, id: !student.id };
        }
        return student;
      });
    default:
      return state;
  }
};
export default students;
