import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavButton() {
  const location = useLocation();

  const buttons = [
    { to: "/", text: "報到" },
    { to: "/scan", text: "掃描" },
    { to: "/writeoff", text: "核銷" },
    { to: "/report", text: "報表" },
  ];
  return (
    <div className="mt-5 d-flex justify-content-around">
      {buttons.map((button, i) => (
        <Link
          key={i}
          to={button.to}
          className={`btn ${location.pathname === button.to ? "btn-secondary" : "btn-primary"}`}
        >
          {button.text}
        </Link>
      ))}
    </div>
  );
}

export default NavButton;
