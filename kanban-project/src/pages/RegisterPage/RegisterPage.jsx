import * as S from "./RegisterPage.styled"

export default function RegisterPage() {
  return (
    <S.BodySignUp>
        <S.StyledWrapper>
            <S.ContainerSignUp>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Регистрация</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin id="formLogUp" action="#">
                            <S.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя" />
                            <S.ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта" />
                            <S.ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                            <S.ModalBtnEnter id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </S.ModalBtnEnter>
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
  )
}
