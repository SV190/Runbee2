import axios from "axios";
import React, { Fragment, useState } from "react";

import { useCart } from "../../hooks/useCart";
import Info from "../Info";

import styles from "./Drawer.module.scss";

export default function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplited, setIsOrderComplited] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6327341bba4a9c4753330339.mockapi.io/orders",
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderComplited(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://6327341bba4a9c4753330339.mockapi.io/cart/" + item.id
        );
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    
      <div
        onClick={onClose}
        className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.overlayDrawer}
        >
          <header  className={styles.hed}>
            <h2 className="mb-30 d-flex justify-between">
            Корзина
            <img
              onClick={onClose}
              className={styles.remove}
              src="img/xButton.svg"
              alt="Remove"
            />
          </h2>
          </header>
          

          {items.length > 0 ? (
            <Fragment>
              <div className={styles.overlayItems}>
                {items.map((obj, index) => {
                  return (
                    <div key={index} className={styles.cart}>
                      <div class={styles.removeIcon}>
                        <svg onClick={() => onRemove(obj.idItem, obj.id)}
                            class={styles.re} width="13px" height="15px" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 4.23047C0.5 3.95433 0.723858 3.73047 1 3.73047H13C13.2761 3.73047 13.5 3.95433 13.5 4.23047C13.5 4.50661 13.2761 4.73047 13 4.73047H1C0.723858 4.73047 0.5 4.50661 0.5 4.23047Z" fill="#1D1D20"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.23047C2 3.95433 2.22386 3.73047 2.5 3.73047H11.5C11.7761 3.73047 12 3.95433 12 4.23047V13.9228C12 14.3295 11.8503 14.7264 11.5735 15.0245C11.2955 15.3238 10.9103 15.4997 10.5 15.4997H3.5C3.08972 15.4997 2.70445 15.3238 2.4265 15.0245C2.1497 14.7264 2 14.3295 2 13.9228V4.23047ZM3 4.73047V13.9228C3 14.0873 3.06101 14.2382 3.15929 14.3441C3.25641 14.4486 3.37985 14.4997 3.5 14.4997H10.5C10.6201 14.4997 10.7436 14.4486 10.8407 14.3441C10.939 14.2382 11 14.0873 11 13.9228V4.73047H3Z" fill="#1D1D20"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.5C6.48203 1.5 5.97705 1.72125 5.59863 2.12878C5.21905 2.53756 5 3.09941 5 3.69231V4.23077C5 4.50691 4.77614 4.73077 4.5 4.73077C4.22386 4.73077 4 4.50691 4 4.23077V3.69231C4 2.85712 4.30774 2.04937 4.86584 1.44833C5.4251 0.846051 6.19189 0.5 7 0.5C7.80811 0.5 8.5749 0.846051 9.13416 1.44833C9.69227 2.04937 10 2.85712 10 3.69231V4.23077C10 4.50691 9.77614 4.73077 9.5 4.73077C9.22386 4.73077 9 4.50691 9 4.23077V3.69231C9 3.09941 8.78095 2.53756 8.40137 2.12878C8.02295 1.72125 7.51797 1.5 7 1.5Z" fill="#1D1D20"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 5.88477C5.77614 5.88477 6 6.10862 6 6.38477V12.3078C6 12.584 5.77614 12.8078 5.5 12.8078C5.22386 12.8078 5 12.584 5 12.3078V6.38477C5 6.10862 5.22386 5.88477 5.5 5.88477Z" fill="#1D1D20"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 5.88477C8.77614 5.88477 9 6.10862 9 6.38477V12.3078C9 12.584 8.77614 12.8078 8.5 12.8078C8.22386 12.8078 8 12.584 8 12.3078V6.38477C8 6.10862 8.22386 5.88477 8.5 5.88477Z" fill="#1D1D20"></path></svg>
                      </div>
                      <div
                        style={{ backgroundImage: `url(${obj.img})` }}
                        className={styles.cartImg}
                      >
                      </div>
                      
                      <h3 className="mb-5">{obj.brand}</h3>
                      <h3 className={styles.productTitle}>{obj.name}</h3>
                       
                      
                      
                      <dl class={styles.sp}>
                        <div className={styles.productItem}>
                          <dt className={styles.he}>Размер</dt>
                          <dd className={styles.sum}> 39</dd>
                        </div>
                        <div className={styles.productItem}>
                          <dt className={styles.he}>Стоимость</dt>
                          <dd className={styles.sum}>{obj.price}₽</dd>
                        </div>
                        </dl>  
                        

                      
                    </div>
                  );
                })}
              </div>

              <div className={styles.overlayTotal}>
                <ul>
                  <li className="d-flex">
                    <span>Итого: </span>
                    <div></div>
                    <h3>{totalPrice} руб. </h3>
                  </li>
                  
                </ul>
                <button
                  disabled={isLoading}
                  onClick={onClickOrder}
                  className={styles.greenButton}
                >
                  Оформить заказ
                  <img src="img/arrow.svg" alt="arrow" />
                </button>
              </div>
            </Fragment>
          ) : (
            <Info
              title={isOrderComplited ? "Заказ оформлен!" : "Корзина пустая"}
              description={
                isOrderComplited
                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                  : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              }
              image={isOrderComplited ? "img/done.svg" : "img/cartEmpty.svg"}
            />
          )}
        </div>
      </div>
      
    
  );
}
