import React, {useState, useEffect, useContext} from 'react';
import Skeleton  from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';


import ContentLoader from "react-content-loader";
import AppContext from "../context";

export default function Products({
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  name,
  price,
  img,
  id,
  idItem,
  onPlus,
  onFavorite,}) {

    const { isItemAdded, isItemLiked } = useContext(AppContext);
    const obj = { name, price, img, id, idItem };

    const onClickLike = () => {
      onFavorite(obj);
    };
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {

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

 


  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
            <Skeleton height={350}/>

        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>

        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>

        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>

        </div>
      </>
  );
};

  const filterProduct = (cat) => {
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);

  };


  const ShowProducts = () => {
    return (
      <>
    
    {filter.map((product) => {
      return (
        <>
        
        <div className="col-md-3 mb-4">
          <NavLink to={`/products/${product.id}`}>
          <div class="card h-100 text-center p-4" key={product.id}>
            <img src={product.img} class="card-img-top" alt={product.brand} height="250px"/>
            <div class="card-body">
            <h5 class="card-title mb-0">{product.brand}</h5>
              <standart class="card-title mb-0">{product.name}</standart>
              <p class="card-text lead fw-bold mt-20">{product.price}₽</p>
              
            </div>
            <div>
              <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Купить</NavLink>
              
              {onFavorite && (
            
              <img
                onClick={onClickLike}
                className="favorite"
                
                src={
                  isItemLiked(idItem)
                    ? "img/heartLike.svg"
                    : "img/heartUnlike.svg"
                }
                alt="heart"
              />
            
          )}
            </div>
          </div></NavLink>
        </div>
        

        
        
        
        </>
      ) })}
    
    
    </>)
    }
  return (
    <div>

<div class="nt card container">
  <img src="" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    
  </div>
  <div class="buttons d-flex justify-content-center pt-5 mt-5 mb-5 pb-5" >
  <img src="" class="card-img" alt="..."/>
  <img src="" class="card-img" alt="..."/>
  <img src="" class="card-img" alt="..."/>
  <img src="" class="card-img" alt="..."/>
  
  
  
  </div>
</div>

<div className="conten p-10">
      <div className="d-flex align-center mb-20 justify-between">
        <h1 className="">
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search d-flex">
        <form className='formSearch'>
           <input className='inputSearch' type="text" placeholder="Искать здесь..."/>
           <button className='buttonSearch' type="submit"></button>
        </form>
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

        {/* {renderItems()} */}
      </div>
    </div>

<div className="buttons d-flex justify-content-center pt-5 mt-5 mb-5 pb-5">
      <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Adidas")}>Adidas</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Nike")}>Nike</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Puma")}>Puma</button>
      <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Ссылка выпадающего списка
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Действие</a></li>
    <li><a class="dropdown-item" href="#">Другое действие</a></li>
    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
  </ul>
</div>
</div>




      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center"></h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
       


          
          {loading ? <Loading /> : <ShowProducts/>}
          </div>  
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




    


