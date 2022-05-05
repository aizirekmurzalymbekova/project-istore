import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about-title">
        <h3 className="about-title-text">
          iStore - магазин техники Apple в Бишкеке
        </h3>
      </div>
      <div>
        <img
          className="about-image"
          src="https://istore.kg/media/about_us_page/2020.20.26-00015_r9b2z4I.jpg"
          alt="about us"
        />
      </div>

      <div className="about-title">
        <div className="info-about">
          <h4>
            У нас можно приобрести всю линейку продукций компании Apple по самым
            привлекательным ценам
          </h4>
          <h5>
            С 2013 года мы знакомим бишкекчан с полной линейкой продукции Apple,
            а также предлагаем большой выбор дополнительных устройств, гаджетов
            и аксессуаров. В магазине вы можете протестировать iMac, MacBook,
            iPad или iPhone, все девайсы в открытом доступе.
          </h5>
          <h5>
            Наши опытные консультанты ответят на все вопросы и помогут
            определиться с выбором, а главное — подберут то, что подойдет именно
            вам. Кроме того, мы предлагаем нашим клиентам полное гарантийное
            обслуживание, неограниченное время сервисного обслуживания по
            программной части, бонусы по накопительной программе, выгодные
            предложения и акции! Реквизиты: ИП Едигеев А.Н. <br /> Всегда рады
            видеть вас!
          </h5>
        </div>
        <div className="servises-block">
          <div className="blocks">
            <img
              width={20}
              src="https://istore.kg/media/about_us_page/headphones_support_1.png"
              alt="consultaion"
            />
            <h4>Консультация и сервис</h4>
            <h5>
              Профессиональный и приветливый персонал; подбор и предложение
              только оптимальных решений; персональный менеджер
            </h5>
          </div>
          <div className="blocks">
            <img
              width={20}
              src="https://istore.kg/media/about_us_page/Layer_1.png"
              alt="prises"
            />
            <h4>Цены и расчеты</h4>
            <h5>
              Любая форма оплаты: наличный и безналичный расчет, банковские
              карты Visa, MasterCard; возможность приобрести продукцию в кредит
            </h5>
          </div>
          <div className="blocks">
            <img
              width={20}
              src="https://istore.kg/media/about_us_page/Wrench_1.png"
              alt="постпродажный сервис"
            />
            <h4>Постпродажный сервис</h4>
            <h5>Консультации по использованию; гарантийное обслуживание</h5>
          </div>
          <div className="blocks">
            <img
              width={20}
              src="https://istore.kg/media/about_us_page/Box_4.png"
              alt="постпродажный сервис"
            />
            <h4>Всегда в наличии</h4>
            <h5>
              Айфоны, Айпады, Макбуки, а также оригинальные аксессуары для Ваших
              гаджетов
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
