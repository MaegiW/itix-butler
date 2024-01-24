import NavButton from "./components/NavButton";
import { useState } from "react";

function Scan() {
  const order = {
    orderNumber: "#123",
    name: "陳先生",
    phoneNumber: "0911XXX777",
    numberOfPeople: "2大",
    ticketCount: "2張",
    reservationTime: "2024-01-15-12:30",
    checkInStatus: "未報到",
  };

  return (
    <div>
      <div className="p-4">
        <h3>iTix行動管家</h3>
        <p className="fs-5">掃瑪查詢</p>
        <div>
          <img src="https://fakeimg.pl/200/"></img>
        </div>
      </div>

      <div>
        <p>訂單 : {order.orderNumber}</p>
        <p>姓名 : {order.name}</p>
        <p>電話 : {order.phoneNumber}</p>
        <p>人數 : {order.numberOfPeople}</p>
        <p>票數 : {order.ticketCount}</p>
        <p>預約 : {order.reservationTime}</p>
        <p>報到 : {order.checkInStatus}</p>
      </div>
    </div>
  );
}

export default Scan;
