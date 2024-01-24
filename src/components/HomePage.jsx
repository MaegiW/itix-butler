import { Outlet } from "react-router-dom";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <>
      <Outlet />
      <NavButton />
    </>
  );
}

export default HomePage;
