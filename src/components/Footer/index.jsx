import axios from "axios";
import React, { Fragment, useState } from "react";

import { useCart } from "../../hooks/useCart";
import Info from "../Info";



import styles from "./Footer.module.scss";

export default function Footer(){

  return (
    <footer class="container footer">
       <div className={styles.main}>
  <div class="footer__addr">

    <h1 class="footer__logo">AboutUs</h1>
        
    
    
    <address>
      5534 Somewhere In. The World 22193-10212
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h1 class="nav__title">Legal</h1>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2022 RUNBEE. All rights reserved.</p>
    
    <div class="legal__links">
      <ul class="social-icons">
          <li><a class="telegram" href="https://t.me/runbeestoree"><i class="fa fa-telegram"></i></a></li>
          <li><a class="instagram" href="https://instagram.com/runbee/"><i class="fa fa-instagram"></i></a></li>
          <li><a class="dribbble" href="https://instagram.com/runbee/"><i class="fa fa-dribbble"></i></a></li>
          
        </ul>
    </div>
  </div>
  </div>
  <script src="https://use.fontawesome.com/505831232c.js"></script>
</footer>

  )
};
