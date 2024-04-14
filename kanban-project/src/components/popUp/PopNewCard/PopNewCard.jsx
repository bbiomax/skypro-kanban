import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import * as S from "./PopNewCard.styled";
import { postTask } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useCards } from "../../../hooks/useCards";

function PopNewCard() {
  const [selectedDate, setSelectedDate] = useState();
  const { user } = useUser();
  const { setCards } = useCards();
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
    status: "Без статуса",
    date: "2024-01-07T16:26:18.179Z",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  // console.log(newTask.status);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!newTask.title || !newTask.description) {
      alert("Пожалуйста, заполните все поля");
      return;
    } 

    postTask({ user, taskData: newTask }).then((response) => {
      setCards(response.tasks);
      navigate(appRoutes.HOME);
    });
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={appRoutes.HOME}>
              <span className="pop-new-card__close">&#10006;</span>
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
            <S.ProdCheckbox>
              <S.RadioToolbar>
                <S.InputRadio1
                  type="radio"
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <S.LabelRadio1 htmlFor="radio1">Web Design</S.LabelRadio1>

                <S.InputRadio2
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange}
                />
                <S.LabelRadio2 htmlFor="radio2">Research</S.LabelRadio2>

                <S.InputRadio3
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange}
                />
                <S.LabelRadio3 htmlFor="radio3">Copywriting</S.LabelRadio3>
              </S.RadioToolbar>
            </S.ProdCheckbox>
            <button
              onClick={handleFormSubmit}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
