import React from "react";
import { NavLink } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import styles from "./Header.module.scss";

export default function Header({ onClickCart }) {
  const { totalPrice, favorites } = useCart();

  return (
    <header className=" container d-flex justify-between align-center p-10">
      <NavLink to={"/"} exact="true">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="img/logo.png"
            alt="Logo"
          />
          <div>
            <h3 className="text-uppercase">RUNBEE</h3>
            <p className="opacity-4"> Заебал придумывай сам</p>
          </div>
        </div>
      </NavLink>

      <p>Бренды</p>
      <NavLink className="nav-NavLink" to="/products">Products</NavLink>
      <div className={styles.wrapper}>
        
        
      </div>
      
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Действие
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Действие</a></li>
    <li><a class="dropdown-item" href="#">Другое действие</a></li>
    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Отделенная ссылка</a></li>
  </ul>
</div>
    

      <div>
        <ul className="d-flex">
          <li onClick={onClickCart} className="mr-30 d-flex align-center  cu-p">
            <img
              width={21}
              height={21}
              className="mr-10"
              src={
                totalPrice ? "img/cartLogoFill.svg" : "img/cartLogoEmpty.svg"
              }
              alt="Cart"
            />

            
            <samp>{totalPrice} руб.</samp>
          </li>
          <li>
            <NavLink to={"/favorites"}>
              <img
                width={21}
                height={19}
                className="cu-p mr-30"
                src={
                  favorites.length > 0
                    ? "img/favoriteFill.svg"
                    : "img/favoriteEmpty.svg"
                }
                alt="Favorite"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/orders"}>
              <img
                width={18}
                height={18}
                className="cu-p"
                src="img/user.svg"
                alt="User"
              />
            </NavLink>
          </li>
          
        </ul>
      </div>
    </header>
  );
}
