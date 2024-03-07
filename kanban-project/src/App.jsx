import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import TaskPage from "./pages/TaksPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import './App.css';
// import CreateNewCard from "./pages/CreateNewCardPage/CreateNewCardPage";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.HOME} element={<HomePage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          {/* <Route path={appRoutes.CREATE_TASK} element={<CreateNewCard />} /> */}
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>

      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
