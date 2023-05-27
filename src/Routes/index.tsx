import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import PrivateRoute from "./PrivateRoute";
import { authRoutes } from "./AuthRoutes";
import Logins from "../Auth";

const Routers = () => {
  const login = localStorage.getItem("login");

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {login ? (
          <>
            <Route path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/enterprise`} />}/>
            <Route
              path={`/`}
              element={
                <Navigate to={`${process.env.PUBLIC_URL}/dashboard/enterprise`} />
              }
            />
          </>
        ) : (
          ""
        )}
        <Route path={"/"} element={<PrivateRoute />}>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Route>
        {authRoutes.map(({ path, Component }, i) => (
          <Route path={path} element={Component} key={i} />
        ))}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Logins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
