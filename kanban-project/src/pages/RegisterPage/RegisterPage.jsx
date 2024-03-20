import { useState } from "react";
import * as S from "./RegisterPage.styled";
import { signUp } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function RegisterPage() {
  const {login} = useUser();
  const navigate = useNavigate();

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
      const data = await signUp(signupData);
      login(data.user);
      navigate(appRoutes.HOME)
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
                  <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignUp>
      </S.StyledWrapper>
    </S.BodySignUp>
  );
}
