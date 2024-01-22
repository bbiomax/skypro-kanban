import "./App.css";
import PopExit from "./components/popUp/PopExit";
import PopNewCard from "./components/popUp/PopNewCard";
import PopBrowse from "./components/popUp/PopBrowse";
import Header from "./components/header/Header";
import WithoutStatus from "./components/Main/WithoutStatus";
import NeedToDo from "./components/Main/NeedToDo";
import InWork from "./components/Main/InWork";
import Test from "./components/Main/Test";
import Done from "./components/Main/Done";

function App() {
  return (
    <>
      <div className="wrapper">
      {/* <!-- pop-up start--> */}
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        {/* <!-- pop-up end--> */}

        <Header />
        
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">

                <WithoutStatus />
                  
                <NeedToDo />
    
                <InWork />
    
                <Test />
    
                <Done />
              </div>
            </div>
          </div>
        </main>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
