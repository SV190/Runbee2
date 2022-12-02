import React from "react";

import Card from "../components/Card";
import Products from "../pages/Products";


export default function Home({
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  items,
  onAddToCart,
  onAddToProduct,
  onAddToFavorite,
  isLoading,
  loading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (isLoading ? [...Array(22)] : filtredItems).map((item, index) => {
      return (
        
          <Products/>
      
        
      );
    });
  };
  
 
 
  
  
  const Loading = () => {
    return (
      <>
        Loading....
      </>
  )}


  const ShowProducts = () => {
    return (
      <>
    <div className="buttons ">
      <button className="btn btn-outline-dark me-2">All</button>
      <button className="btn btn-outline-dark me-2">Adidas</button>
      <button className="btn btn-outline-dark me-2">Nike</button>
      <button className="btn btn-outline-dark me-2">Puma</button>
      
    </div></>)}
  


  return (
    <div className="mainHome">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">
          {searchValue ? `Поиск по запросу "${searchValue}"` : <ShowProducts/>}
        </h1>
        <div className="search d-flex">
          <img src="img/search.svg" alt="search" />
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear"
              src="img/xButton.svg"
              alt="Cleaer"
            />
          )}

          
        </div>
      </div>
      <div className="content__sneakers d-flex flex-wrap justify-around">
        {/* Отдельная карточка товара */}

        {renderItems()}
      </div>
      <nav aria-label="Page navigation example">
  <ul class="pagination d-flex justify-content-center mb-5 pb-5">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>

    
  );
  
}

//scroll 
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -180);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */










