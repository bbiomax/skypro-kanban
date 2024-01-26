import "./App.css";
import PopExit from "./components/popUp/PopExit/PopExit";
import PopNewCard from "./components/popUp/PopNewCard/PopNewCard";
import PopBrowse from "./components/popUp/PopBrowse/PopBrowse";
import Header from "./components/header/Header";
import MainContent from "./components/MainContent/MainContent";
import Column from "./components/Columns/Column";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Header />

        <MainContent>
          <Column columnTitle={"Без статуса"} />
          <Column columnTitle={"Нужно сделать"} />
          <Column columnTitle={"В работе"} />
          <Column columnTitle={"Тестирование"} />
          <Column columnTitle={"Готово"} />
        </MainContent>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
