import React from "react";
import { Link } from 'react-router-dom';
import './main.css';
import Logo from '../logo/Logo';
import im from './img/bg2.png';
//import mnu1 from './img/mnu1.png';
//import mnu2 from './img/mnu2.png';
//import mnu3 from './img/mnu3.png';
//import mnu4 from './img/mnu4.png';
function ItHeroes() {

   return (
		<div className="row row-background-img">
         <section className="col-7 section-header">
            <Logo/>
            <h1 className="">IT-Heroes</h1>
            <p className="p-it"><span>IT-Heroes</span> &nbsp;-&nbsp; це &nbsp; воїни &nbsp; на &nbsp; варті &nbsp; твоєї &nbsp; інформаційної
            кібер-безпеки. Ми об'єднали спеціалістів та любителів з усіх куточків України.</p>
            <p className="p-it"><span>Наша ціль:</span> &nbsp;надавати&nbsp; лише&nbsp; правдиву&nbsp; інформацію&nbsp; та
            позбавлятися від <span>фейків</span>.</p>
            <div className="join"><Link to="">Хочу до команди!</Link></div>
         </section>
         <section className="col-5">
            <div className="div-im">
               <img src={im}/>
            </div>
         </section>
         <section className="col-12 section-boxes">
            <div className="blue-box">
               <div className="div-blue-box">
                  <div className="box box-1">
                     <div className="div-bg-img1"></div>
                     <h2>Розробники</h2>
                     <p>Задача розробника створити програмне забезпечення
                        для комфортного використання
                     </p>
                  </div>
               </div>
               <div className="div-blue-box">
                  <div className="box box-1">
                  <div className="div-bg-img2"></div>
                  <h2>Дизайнери</h2>
                  <p>Створюють яскравий та унікальний дизайн для чіткої
                     подачі інформації та приємного перегляду новин
                  </p>
                  </div>
               </div>
               <div className="div-blue-box">
                  <div className="box box-1">
                  <div className="div-bg-img3"></div>
                  <h2>Кібер-захисники</h2>
                  <p>Ретельно збирають якісну інформацію та контролюють
                     порядок у мережі
                  </p>
               </div>
               </div>
               <div className="div-blue-box">
                  <div className="box box-1">
                  <div className="div-bg-img4"></div>
                  <h2>Программісти</h2>
                  <p>Поєднують всі види робіт в одній програмі та надають 
                     можливість взаємодіяти з шнформацією</p>
               </div>
               </div>
            </div>
         </section>
		</div>
	);
}

export default ItHeroes;