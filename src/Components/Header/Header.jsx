import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FiLogIn } from "react-icons/fi";
import logo from "../../assets/img/logo.svg";
import "./Header.css";
import { AddSuggestion } from "../AddSuggestion";

const Header = ({ offerData, setOfferData }) => {
  const [lang, setLang] = useState("UA");
  const [current, setCurrent] = useState("UAH");

  const handleChangeLang = (e) => {
    setLang(e.target.value);
  };
  const handleChangeCurr = (e) => {
    setCurrent(e.target.value);
  };

  return (
    <div className='wrapper__header'>
      <div className='container__header_l'></div>
      <div className='container__header'>
        <div className='header__icon'>
          <img src={logo} alt='Gup' />
        </div>
        <div className='header__title'>
          <h3>
            Портал оренди та прокату <br />
            товарів та послуг
          </h3>
        </div>
        <div className='header__box'>
          <div className='addOffer'>
            <AddSuggestion offerData={offerData} setOfferData={setOfferData} />
          </div>
          <div className='login'>
            <FiLogIn />
            <span>Увійти</span>
          </div>
          <div className='language'>
            <Select
              value={lang}
              onChange={handleChangeLang}
              sx={{ color: "white", border: "none" }}
            >
              <MenuItem value={"UA"}>UA</MenuItem>
              <MenuItem value={"EN"}>EN</MenuItem>
            </Select>
          </div>
          <div className='currency'>
            <Select
              value={current}
              onChange={handleChangeCurr}
              sx={{ color: "white" }}
            >
              <MenuItem value={"UAH"}>UAH</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div className='container__header_r'></div>
    </div>
  );
};

export { Header };
