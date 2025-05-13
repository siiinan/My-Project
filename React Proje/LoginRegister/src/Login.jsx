import "./css/Login.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";
import { RiSettings3Fill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";

const DATA_URL = "http://localhost:3005/users";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [errorText, seterrorText] = useState("");

  const GirisYap = async () => {
    const response = await axios.get(DATA_URL);
    const users = response.data;

    const eslesenKullanicilar = users.find(
      (user) => user.username == username && user.password == password
    );

    if (eslesenKullanicilar) {
      navigate("/satranc");
      setPasswordMatch(false);
    } else {
      seterrorText("Kullanıcı Adı Veya Şifre Hatalı!!");
      setPasswordMatch(true);
    }
  };

  return (
    <div className="container">
      <div>
        <img className="ImageFormLogin" src="src/image/Login.jpg" alt="" />
        <RiSettings3Fill className="imageIcons" />
      </div>
      <div className="form">
        <h2>Giriş</h2>
        <p className="welcomeText">
          Hoş geldiniz, lütfen bilgilerinizi doldurarak giriş yapınız.
        </p>
        <div>
          <div className="formChild">
            <div>
              <CiUser className="userLogo" />
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Kullanıcı Adı"
              style={{
                borderBottom: passwordMatch
                  ? "1px solid red"
                  : "1px solid lightgray",
              }}
            />
          </div>
          <div className="formChild">
            <div>
              <PiPasswordThin className="passwordLogo" />
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Şifre"
              style={{
                borderBottom: passwordMatch
                  ? "1px solid red"
                  : "1px solid lightgray",
              }}
            />
          </div>
        </div>
        <div>
          <button className="buttonLoginRegister" onClick={GirisYap}>
            Giriş Yap
          </button>
          <div className="checkboxmember">
            <p>Kayıtlı Değil Misin?</p>
            <Link to="/register">Kayıt Ol</Link>
          </div>
        </div>
        <div>
          <p style={{ color: "red", marginTop: "20px" }}>{errorText}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
