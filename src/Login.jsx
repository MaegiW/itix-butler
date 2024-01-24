import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import { useState } from "react";

function Login() {
  const [inputIdValue, setInputIdValue] = useState("");
  const handleIdChange = (e) => {
    setInputIdValue(e.target.value);
  };

  const [inputEmailValue, setInputEmailValue] = useState("");
  const handleEmailChange = (e) => {
    setInputEmailValue(e.target.value);
  };

  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const handlePasswordChange = (e) => {
    setInputPasswordValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("店家帳號:", inputIdValue);
    console.log("管理者帳號", inputEmailValue);
    console.log("管理者密碼:", inputPasswordValue);
  };

  return (
    <form className="">
      <h3 style={{ color: "green" }}>iTix行動管家</h3>
      <p className="fs-5">管理帳號綁定</p>

      <CustomInput
        htmlFor="id"
        labelText="店家帳號:"
        type="id"
        placeholder="lemoncx"
        value={inputIdValue}
        onChange={handleIdChange}
      />

      <CustomInput
        htmlFor="email"
        labelText="管理者帳號:"
        type="email"
        placeholder="maggie156@hihotel.com.tw"
        value={inputEmailValue}
        onChange={handleEmailChange}
      />

      <CustomInput
        htmlFor="password"
        labelText="管理者密碼:"
        type="password"
        placeholder="*******"
        value={inputPasswordValue}
        onChange={handlePasswordChange}
      />

      <div className="mb-2">
        <a href="" className="me-5">
          忘記密碼?
        </a>
        <CustomButton
          buttonText="綁定"
          to="/"
          onClickHandler={handleButtonClick}
        />
      </div>

      <div className="mb-2 ">
        <a href="" className="me-4">
          申請新管理者
        </a>
        <CustomButton
          buttonText="申請"
          to="/signup"
          onClickHandler={handleButtonClick}
        />
      </div>

      <p>店家帳號: {inputIdValue}</p>
      <p>管理者帳號: {inputEmailValue}</p>
      <p>管理者密碼: {inputPasswordValue}</p>
    </form>
  );
}

export default Login;
