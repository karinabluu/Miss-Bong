import { useState } from "react";
import * as St from "../../styles/styles";

export default function JoinInput(props) {
  const { value, handleChange, handleKeyUp, errorMessage } = props;
  const [isCheck, setIsCheck] = useState(true);

  const handleValidateKeyUp = () => {
    const isValidate = handleKeyUp(value);
    setIsCheck(isValidate);
  };

  return (
    <>
      <St.Input
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={handleValidateKeyUp}
      />
      {!isCheck && <St.ErrorMessage>{errorMessage}</St.ErrorMessage>}
    </>
  );
}
