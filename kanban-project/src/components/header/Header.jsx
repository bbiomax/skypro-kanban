import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

function Header() {
  // { addCard }
  const [isOpened, setIsOpened] = useState(false);

  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <Link to={appRoutes.CREATE_NEW_CARD}>
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                Создать новую задачу
              </button>
            </Link>

            <div onClick={togglePopup} className="header__user _hover02">
              Ivan Ivanov
            </div>

            {isOpened && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <!-- <a href="">x</a> --> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <Link to={appRoutes.EXIT}>
                  <button type="button" className="_hover03">
                    Выйти
                  </button>
                </Link>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;
