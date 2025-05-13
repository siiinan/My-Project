import "./css/Login.css";
import "./css/Register.css";
import { Routes, Route, Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";
import { RiSettings3Fill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const DATA_URL = "http://localhost:3005/users";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReEnterpassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [errorText, seterrorText] = useState("");

  const KayitOl = async () => {
    if (!username || !password || !reenterpassword) {
      seterrorText("Lütfen Tüm Alanları Doldurun.");
      return;
    }

    if (username.length < 4 || password.length < 4) {
      seterrorText("Kullanıcı Adı Veya Şifre En az 4 Harfli Olmalı!");
      return;
    }

    if (password !== reenterpassword) {
      seterrorText("Şifreler Uyuşmuyor!!");
      setPasswordMatch(true);
      return;
    } else {
      setPasswordMatch(false);
    }

    try {
      await axios.post(DATA_URL, {
        username: username,
        password: password,
      });
      alert("Kayıt Başarılı Giriş Yapabilirsiniz.");
    } catch (error) {
      console.error("Kayıt sırasında hata", error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Kaydol</h2>
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
          <div className="formChild">
            <PiPasswordThin className="passwordLogo" />
            <input
              value={reenterpassword}
              onChange={(e) => setReEnterpassword(e.target.value)}
              type="password"
              placeholder="Tekrar Şifre"
              style={{
                borderBottom: passwordMatch
                  ? "1px solid red"
                  : "1px solid lightgray",
              }}
            />
          </div>
        </div>
        <div>
          <button className="buttonLoginRegister" onClick={KayitOl}>
            Kayıt Ol
          </button>
          <div className="checkboxmember">
            <p>Kayıtlı Mısın?</p>
            <Link to="/">Giriş Yap</Link>
          </div>
        </div>
        <div>
          <p style={{ color: "red", marginTop: "20px" }}>{errorText}</p>
        </div>

        <p style={{ color: "gray" }}>veya şu yöntemle kaydol</p>
        <div className="signLogo">
          <div className="facebook">
            <FaFacebookF className="signLogo3" />
          </div>
          <div className="twitter">
            <FaTwitter className="signLogo3" />
          </div>
          <div className="google">
            <FaGoogle className="signLogo3" />
          </div>
        </div>
      </div>
      <div>
        <div className="imageForm">
          <img
            className="imageFormRegister"
            src="src/image/Register.jpg"
            alt=""
          />
          <RiSettings3Fill className="imageIconsRegister" />
        </div>
      </div>
    </div>
  );
}

export default Register;
