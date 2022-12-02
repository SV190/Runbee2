import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton  from 'react-loading-skeleton';
import AppContext from "../context";

export default function Product({onClickCart,
    name,
    brand,
    price,
    size,
    img,
    
    idItem,
    onPlus,
    onFavorite,
    onProduct,
    opened}
) {
    const { isItemAdded, isItemLiked } = useContext(AppContext);
    const obj = { name, brand, price, size, img, idItem };
    
    const onClickLike = () => {
        onFavorite(obj);
      };
    const {id} = useParams();
    const  [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
      const onClickPlus = () => {
            onPlus(obj);

      };

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://6327341bba4a9c4753330339.mockapi.io/items/${id}`);
            console.log({id})
            setProduct(await response.json());
            setLoading(false);
        };
        getProduct();
    }, []);


    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>

                </div>
                <div className="col-md-6" styles={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
            </>
        )
    }
    
    const ShowProducts = () => {
        return (
            <>

                <div className="col-md-6">
                    <img src={product.img} alt={product.brand} height="400px" width="400px" />
                </div>
                
                <div className="col-md-6">  
                    <h4 className="text-uppercase text-black-50">
                    {product.brand}
                    </h4>
                    <h1 className="display-5">{product.name}</h1>
                    <h5 className="">
                        Описание
                    </h5>
                    <p>
                    {product.descriptions}    
                    </p> 

                    <h3 className="display fw-bold my-4">
                        {product.price} ₽
                    </h3>
                    <h5 className="">
                        Размер
                    </h5>
                    <p className="lead">{product.size}</p>
                    <div className="display fw-bold my-4">
                        <a onClick={onClickPlus} class='cart' href="#">
                            <button className="btn btn-outline-dark px-4 py-2">Добавить в Корзину </button></a>
                        <li  onClick={onClickCart} className="btn btn-dark ms-2 px-3 py-2">Заказать в один клик</li>
                       
                        <button className="btn btn-outline-dark px-4 py-2"> <img src="img/heartLike.svg" alt="heart" /> </button> 
                    </div>
              

                </div>
            </>
        )
    }



  return (
    <div className="container">
        <div className="row">
            {loading ? <Loading/> : <ShowProducts/>}
        </div>
    </div>
  )
}
