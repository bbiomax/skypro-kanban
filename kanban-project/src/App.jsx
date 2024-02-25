import { Route, Routes, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import TaskPage from "./pages/TaksPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.HOME);
  }

  function logout() {
    setUser(null);
    navigate(appRoutes.LOGIN);
  }

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.HOME} element={<HomePage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>

      <Route path={appRoutes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
