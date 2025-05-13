import "./css/Satranc.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { useState } from "react";

export default function satranc() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showSettings, setshowSettings] = useState(false);
  const kareler = [];

  const GeriDon = () => {
    navigate("/");
  };

  for (let sutun = 0; sutun < 8; sutun++) {
    for (let satir = 0; satir < 8; satir++) {
      kareler.push(
        <div
          id=""
          key={`${sutun}-${satir}`}
          className={(sutun + satir) % 2 == 0 ? "siyahKare" : "beyazKare"}
        ></div>
      );
    }
  }

  return (
    <div>
      <div className="Form">
        <IoExitOutline className="exitIcons" onClick={GeriDon} />
        <div>
          <p className="SatrancYaziBasligi">Satranc Tahtası</p>
        </div>
        <div className="Tahta">{kareler}</div>
        <div>
          <div className="imageForm">
            {!showSettings && (
              <button
                onClick={() => setshowSettings(true)}
                className="YardimButton"
              >
                Yardım
              </button>
            )}
          </div>
          {showSettings && (
            <div className="settings-overlay">
              <div className="settings-content">
                <div>
                  <h2>Ayarlar</h2>
                  <div class="yardim-kutusu">
                    <h3 style={{ color: "black" }}>Satranç Kuralları</h3>
                    <ul>
                      <li>♞ At L şeklinde gider.</li>
                      <li>♖ Kale düz gider.</li>
                      <li>♗ Fil çapraz gider.</li>
                      <li>♕ Vezir düz ve çapraz gidebilir.</li>
                      <li>♔ Şah her yöne 1 kare gidebilir.</li>
                      <li>♙ Piyon sadece ileri gider.</li>
                    </ul>
                    <button
                      onClick={() => {
                        navigate("/satranc");
                        window.location.reload();
                      }}
                    >
                      Kapat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
