import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { MainContent } from "../../components/MainContent/MainContent.styled";
import Column from "../../components/Columns/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useCards } from "../../hooks/useCards";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  const {user} = useUser();
  const {cards, setCards} = useCards();

  useEffect(() => {
    if (user && user.token) {
      getTodos({ token: user.token })
        .then((todos) => {
          setCards(todos.tasks);
          setIsLoading(false);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, [user]);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  return (
    <>
      <div className="wrapper">
        <Outlet />

        <Header addCard={addCard} />

        {isLoading ? (
          "Загрузка..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                columnTitle={status}
                key={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default HomePage;
