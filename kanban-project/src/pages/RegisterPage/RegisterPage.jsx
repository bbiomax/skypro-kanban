import { useState } from "react";
import * as S from "./RegisterPage.styled";
import { signUp } from "../../api";

export default function RegisterPage({ onRegister }) {
  const [signupData, setSignupData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signUp(signupData);
      onRegister(newUser);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <S.BodySignUp>
      <S.StyledWrapper>
        <S.ContainerSignUp>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormLogin onSubmit={handleSignup}>
                <S.ModalInput
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  value={signupData.name}
                  onChange={handleInputChange}
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  value={signupData.login}
                  onChange={handleInputChange}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  value={signupData.password}
                  onChange={handleInputChange}
                />
                <S.ModalBtnEnter type="submit">
                  <div>Зарегистрироваться</div>{" "}
                </S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <p>Уже есть аккаунт?</p>
                  <a href="signin.html">Войдите здесь</a>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignUp>
      </S.StyledWrapper>
    </S.BodySignUp>
  );
}
