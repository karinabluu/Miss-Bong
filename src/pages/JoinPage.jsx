import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validateUserId, validatePassword } from '../util/validation';
import JoinInput from '../components/Input/JoinInput';
import { getToken } from '../util/token';
import * as St from '../styles/styles';

export default function JoinPage() {
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate('/main');
    }
  }, []);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 서로 다릅니다.');
      return;
    }
    try {
      const response = await axios.post('http://3.38.191.164/register', {
        id,
        password,
      });

      console.log('새로운 회원가입이 발생하였습니다 ->', response);
      if (response.status === 201) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  return (
    <St.JoinContainer>
      <St.Header>
        <St.JoinSubTitle>손쉬운 학생관리 봉티쳐</St.JoinSubTitle>
        <St.JoinTitle>회원가입</St.JoinTitle>
        {/* <img
          src="img/lycos.webp"
          alt="img"
          style={{ width: "250px" }}
          onClick={() => {
            navigate("/");
          }}
        /> */}
      </St.Header>

      <St.Col margin="10px 0 20px">
        {/* <St.Row> */}
        <St.JoinText>아이디</St.JoinText>
        <JoinInput
          value={id}
          handleChange={setId}
          handleKeyUp={validateUserId}
          errorMessage={
            '아이디는 7~12자리 이상이며 특수문자와 한글은 포함되지 않습니다.'
          }
        />
        {/* </St.Row> */}
      </St.Col>

      <St.Col margin="10px 0 20px">
        {/* <St.Row> */}
        <St.JoinText>비밀번호</St.JoinText>
        <JoinInput
          value={password}
          handleChange={setPassword}
          handleKeyUp={validatePassword}
          errorMessage={
            '비밀번호는 6자리 이상이며, 특수문자 1개가 포함되어야합니다.'
          }
        />
        {/* </St.Row> */}
      </St.Col>

      <St.Col margin="10px 0 40px">
        {/* <St.Row> */}
        <St.JoinText>비밀번호 재확인</St.JoinText>
        <St.Input onChange={(e) => setPasswordConfirm(e.target.value)} />
        {password === passwordConfirm || (
          <St.ErrorMessage>비밀번호가 동일하지 않습니다</St.ErrorMessage>
        )}
        {/* </St.Row> */}
      </St.Col>

      <St.JoinButton>
        <St.Button buttontheme="primary" onClick={onSubmitHandler}>
          완료
        </St.Button>
        <St.Button
          buttontheme="secondary"
          onClick={() => {
            navigate('/');
            // alert('가입을 축하합니다');
          }}
        >
          다음에 하기
        </St.Button>
      </St.JoinButton>
    </St.JoinContainer>
  );
}
