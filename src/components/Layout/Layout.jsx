import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <Suspense className={css.content} fallback={null}>
        {children}
      </Suspense>
    </div>
  );
};
