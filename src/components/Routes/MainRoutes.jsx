import React, { useEffect } from "react";
import NoAccessPage from "../../pages/NoAccessPage/NoAccessPage";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import UserPage from "../../pages/UserPage/UserPage";
import { getAuthorizedUser } from "../../redux/actions/users";
import { Bars } from "react-loader-spinner";
import "./style.css";

const authorizedRoutes = [
  { path: "/", element: <MainPage /> },
  { path: "/:id", element: <UserPage /> },
];

const MainRoutes = () => {
  const authorizedUser = useSelector((state) => state.users.authorizedUser);
  const isLoading = useSelector((state) => state.users.isAuthorizedUserLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthorizedUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="cnPageRoutesLoader">
        <Bars width={80} height={80} color="#000bff" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {authorizedUser ? (
          authorizedRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))
        ) : (
          <Route path="*" element={<NoAccessPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
