import { v4 as uuid } from 'uuid';

const Categories = [
  {
    id: uuid(),
    name: '김새롬',
    school: '남녕고',
    category: 'high',
    image: '../images/IMG_1262.jpeg',
  },
  {
    id: uuid(),
    name: '양희정',
    school: '노형초',
    category: 'ele',
    image: '../images/IMG_1262.jpeg',
  },
  {
    id: uuid(),
    name: '이재민',
    school: '인천남중',
    category: 'mid',
    image: '../images/IMG_1262.jpeg',
  },
];
export default Categories;
