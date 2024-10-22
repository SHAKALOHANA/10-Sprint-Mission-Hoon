import { ChangeEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "shared/components/Input";
import styles from "./AuthForm.module.css";
import hideIcon from "assets/images/btn_hide.svg";
import kakaoIcon from "assets/images/ic_kakao.svg";
import googleIcon from "assets/images/ic_google.svg";
import Button from "shared/components/Button";

interface Values {
  email: string;
  password: string;
}

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [values, setValues] = useState<Values>(INITIAL_VALUES);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const checkFormEmpty = (values: Values) => {
    return Object.values(values).some((value) => value === "");
  };

  useEffect(() => {
    setIsDisabled(checkFormEmpty(values));
  }, [values]);

  return (
    <form className={styles.authForm}>
      <Input
        className={styles.input}
        type="text"
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        value={values.email}
        onChange={handleInputChange}
      >
        <span className={styles.validationMessage}></span>
      </Input>
      <Input
        className={styles.input}
        type="password"
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        value={values.password}
        onChange={handleInputChange}
      >
        <img src={hideIcon} className={styles.btnEye} alt="비밀번호 표시" />
        <span className={styles.validationMessage}></span>
      </Input>
      <Button className={styles.button} type="submit" disabled={isDisabled}>
        로그인
      </Button>
      <div className={styles.otherAccount}>
        <span>간편 로그인하기</span>
        <div className={styles.iconContainer}>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googleIcon} alt="구글 로그인" />
          </a>
          <a
            href="https://www.kakaocorp.com/page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kakaoIcon} alt="카카오 로그인" />
          </a>
        </div>
      </div>
      <span className={styles.authLink}>
        판다마켓이 처음이신가요?
        <Link to="/signup">회원가입</Link>
      </span>
    </form>
  );
};

export default LoginForm;