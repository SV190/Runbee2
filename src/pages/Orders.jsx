import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Info from "../components/Info";



export default function Orders({}) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  
  

  function show_hide_password(target){
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
    }
    return false;
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://6327341bba4a9c4753330339.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());

        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);

  const Loading = () => {
    return (
        <>
             <div className="conten p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Мои покупки</h1>
      </div>
      <div className="content__sneakers d-flex flex-wrap">
        {/* Отдельная карточка товара */}

        {(isLoading ? [...Array(12)] : orders).map((item, index) => {
          return <Card key={index} loading={isLoading} {...item} />;
        })}
        {!orders.length > 0 && !isLoading && (
          <Info
            title="У вас нет заказов"
            description="Что бы увидеть свои покупки -   
               оформите хотя бы один заказ."
            image="img/smileDown.svg"
          />
        )}
      </div>
    </div>
        </>
    )
}




const ShowOrders = () => {
  return (
      <>
         

 
        
       
         <div class="wrapper fadeInDown">
  <div id="formContent">
    
    <h2 class="active"> Sign In </h2>
    <h2 class="inactive underlineHover">Sign Up </h2>

   
    <div class="fadeIn first">
      <img src="img\user.png" id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <a href="#" class="password-control" onclick="return show_hide_password(this);"></a>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>

    
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>




 
      </>
  )
}


 

   return (
     <div className="containerr">
         <div className="row">
             {loading ? <Loading/> : <ShowOrders/>}
         </div>
     </div>
   )
}

