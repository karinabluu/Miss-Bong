import styled from 'styled-components';
import Category from '../components/Categories/Category';

export default function Home() {
  return (
    <>
      <Container>
        <Category />
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  background-color: #ebeef2;
`;
