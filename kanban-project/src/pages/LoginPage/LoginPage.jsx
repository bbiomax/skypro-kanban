import * as S from "./LoginPage.styled"

export default function LoginPage({login}) {
    return (
        <S.BodySignIn>
            <S.StyledWrapper>
                <S.ContainerSignIn>
                    <S.Modal>
                        <S.ModalBlock>
                            <S.ModalTtl>
                                <h2>Вход</h2>
                            </S.ModalTtl>
                            <S.ModalFormLogin id="formLogIn" action="#">
                                <S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                                <S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
                                <S.ModalBtnEnter onClick={login}>Войти</S.ModalBtnEnter>
                                <S.ModalFormGroup>
                                    <p>Нужно зарегистрироваться?</p>
                                    <a href="signup.html">Регистрируйтесь здесь</a>
                                </S.ModalFormGroup>
                            </S.ModalFormLogin >
                        </S.ModalBlock>
                    </S.Modal>
                </S.ContainerSignIn>
            </S.StyledWrapper>
        </S.BodySignIn>
    )
}