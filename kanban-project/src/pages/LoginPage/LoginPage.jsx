import { useState } from "react";
import * as S from "./LoginPage.styled";
import { signIn } from "../../api";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function LoginPage({ login }) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    await signIn(loginData).then((data) => {
      login(data.user);
    });
  };

  return (
    <S.BodySignIn>
      <S.StyledWrapper>
        <S.ContainerSignIn>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Вход</h2>
              </S.ModalTtl>
              <S.ModalFormLogin>
                <S.ModalInput
                  value={loginData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  value={loginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter onClick={handleLogin}>Войти</S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignIn>
      </S.StyledWrapper>
    </S.BodySignIn>
  );
}
