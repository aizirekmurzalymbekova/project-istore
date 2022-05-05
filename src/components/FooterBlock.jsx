import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-block-leftside">
        <div className="footer-block-leftside-item">
          <img
            src="https://istore.kg/static/_image/istore_logo.png"
            alt="logo-footer"
          />
          <span>Магазин техники Apple в Бишкеке</span>
        </div>
        <div className="footer-block-leftside-item">
          <span className="bold">Режим работы</span>
          <span>Пн - Вс 10:00 - 20:00</span>
        </div>
      </div>

      <div className="footer-block-rightside">
        <div className="footer-block-rightside-item">
          <span className="bold">Продукция</span>
          <Link to="/macbooks">
            <span>Mac</span>
          </Link>
          <Link to="/ipads">
            <span>iPad</span>
          </Link>
          <Link to="/iphones">
            <span>iPhone</span>
          </Link>
          <Link to="watchs">
            <span>Watch</span>
          </Link>
        </div>
        <div className="footer-block-rightside-item">
          <span className="bold">8 лет с Вами</span>
          <Link to="about">
            <span>О нас</span>
          </Link>
          <Link to="#">
            <span>Почему iStore</span>
          </Link>
          <Link to="#">
            <span>Услуги</span>
          </Link>
          <Link to="#">
            <span>Обратная связь</span>
          </Link>
        </div>
        <div className="footer-block-rightside-item">
          <span className="bold">Контакты</span>
          <Link to="#">
            <span>пр. Манаса, 40 (пер. ул.Киевская)</span>
          </Link>
          <Link to="#">
            <span>+996 (555) 802 000</span>

            <span>+996 (505) 802 000</span>
          </Link>
          <Link to="#">
            <span>istorekg@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
