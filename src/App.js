import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Card from "./components/Card";

import AppContext from "../src/context";

function App({}) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  ;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;


  useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const [cartRespons, favoritesRespons, itemsRespons] = await Promise.all(
  //         [
  //           axios.get("https://6327341bba4a9c4753330339.mockapi.io/cart"),
  //           axios.get("https://6327341bba4a9c4753330339.mockapi.io/favorites"),
  //           axios.get("https://6327341bba4a9c4753330339.mockapi.io/items"),
  //         ]
  //       );

  //       setLoading(false);
 
  //       setCartItems(cartRespons.data);
  //       setFavorites(favoritesRespons.data);
  //       setItems(itemsRespons.data);
  //     } catch (error) {
  //       alert("Ошибка приа запросе данных :(");
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);


  const getProducts = async () => {
    setLoading(true);
    const response = await fetch('https://6327341bba4a9c4753330339.mockapi.io/items');
    if(componentMounted){
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      console.log(filter)
    }

    return () => {
      componentMounted = false;

};}
  getProducts();
}, []);

  items.map((item, i) => {
    return (item.idItem = `${i + 1}`);
  });

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find(
      (cartObj) => Number(cartObj.idItem) === Number(obj.idItem)
    );
    try {
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.idItem) !== Number(obj.idItem))
        );
        await axios.delete(
          `https://6327341bba4a9c4753330339.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6327341bba4a9c4753330339.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.idItem === data.idItem) {
              return { ...item, id: data.id };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить товар в корзину");
      console.log(error);
    }
  };

  const onRemoveItem = async (idItem, id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.idItem) !== Number(idItem))
      );
      const { data } = await axios.delete(
        `https://6327341bba4a9c4753330339.mockapi.io/cart/${id}`
      );
      console.log(data);
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.idItem === data.idItem) {
            return { ...item, id: data.id };
          }
          return item;
        })
      );
    } catch (error) {
      alert("Не удалось удалить товар из корзины");
      console.log(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    const findItemFav = favorites.find(
      (item) => Number(item.idItem) === Number(obj.idItem)
    );
    try {
      if (findItemFav) {
        setFavorites((prev) =>
          prev.filter((item) => Number(item.idItem) !== Number(obj.idItem))
        );
        axios.delete(
          `https://6327341bba4a9c4753330339.mockapi.io/favorites/${findItemFav.id}`
        );
      } else {
        setFavorites((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6327341bba4a9c4753330339.mockapi.io/favorites",
          obj
        );
        console.log("data", data);
        setFavorites((prev) =>
          prev.map((item) => {
            if (item.idItem === data.idItem) {
              return { ...item, id: data.id };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить товар в закладки");
      console.log(error);
    }
  };

  const isItemAdded = (idItem) => {
    return cartItems.some((obj) => Number(obj.idItem) === Number(idItem));
  };
  const isItemLiked = (idItem) => {
    return favorites.some((obj) => Number(obj.idItem) === Number(idItem));
  };

  

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        isItemLiked,
        loading,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          opened={cartOpened}
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => setCartOpened(false)}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        

        

        

        <Routes>
           {/* <Route
            path={""}
            element={
              <Home
                items={items}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                loading={loading}
              />
            }
            exact="true"
            


          /> */}
          
        <Route exact path="/card" element={<Card />}/>

          <Route
            path={"favorites"}
            element={
              <Favorites
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
            exact
          />

      <Route exact path="/" element={<Products />} />

      <Route exact path="/products/:id" element={<Product />}/>
        

      
           

          


          <Route
            path={"orders"}
            element={
              <Orders
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
            exact
          />
        </Routes>
        
        <Footer/>
      </div> 
    </AppContext.Provider>
  );
}

export default App;
