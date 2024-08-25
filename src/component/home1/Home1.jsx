import React from 'react'
import "./Home1.css";
import Nav from '../narbar/Nav';
import Sitebar from '../sitebar/Sitebar';
import {useNavigate} from 'react-router-dom'

function Home1() {

  const navigate=useNavigate();
  return (
    <>

    <div class="main">
        <div id="home">
    <Nav/>

            <div class="home-hero">
                <div class="hero-text">
                    <p>New Generation</p>
                    <h1>To Make</h1>
                    <h1>Less <span>Time</span></h1>
                    <h1>More Shoping</h1>
                    
                    <button  onClick={()=>navigate("/shoping/signin")}>Get Satrted</button>
                </div>
                <div class="hero-image">
                    

                    <dotlottie-player src="https://lottie.host/2707de76-e100-48a6-92e4-4ef4cf41c725/4mvilbwGKO.json" background="transparent" speed="1" style={{width:"100%",height: "100%"}} loop autoplay></dotlottie-player>
                </div>
            </div>
        </div>
        <div class="features">
            <div class="feature-text">
                <h1>Imagine Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
            </div>
            <div class="feature-style">
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-shop"></i></div>
                    <div class="icon-text">
                        <h3>Market Analysis</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nihil accusamus voluptates esse, cumque facere quod velit expedita officiis aliquid!</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-bag-shopping"></i></div>
                    <h3>Easy Purchase</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptas aspernatur consequatur unde molestias ad inventore culpa harum voluptatem reprehenderit.</p>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-face-smile"></i></div>
                    <h3>100% Satistified</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat voluptates tempore eius dolore illo quidem repudiandae voluptatibus. Tenetur, laudantium.</p>
                </div>

            </div>
        </div>
        <div class="selling">
            <div class="selling-text">
                  <h1>Best Selling Products</h1>
                  <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="#"/>
            </div>
            <div class="selling-style">
                <div class="selling-box">
                    <img src="/Img/nuts.png" alt=""/>
                    <div class="details">
                        <p>Nuts</p>
                        <h3>Almonds</h3>
                    </div>
                </div>
                <div class="selling-box">
                    <img src="/Img/sanitizer.png" alt=""/>
                    <div class="details">
                        <p>Curing</p>
                        <h3>Sanitizer</h3>
                    </div>
                </div>
                <div class="selling-box">
                    <img src="/Img/oil.png" alt=""/>
                    <div class="details">
                        <p>Oil</p>
                        <h3>Musterd Oil</h3>
                    </div>
                </div>
                <div class="selling-box">
                    <img src="/Img/red-chillies.png" alt=""/>
                    <div class="details">
                        <p>Grocery</p>
                        <h3>Red Chill</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="feed">
            <div class="feedback">
                <div class="feedback-text"> <h1>Customers Reviews</h1></div>
                <div class="feedback-style">
                    <div class="reviews-box">
                        <div class="star">
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <div class="customer-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam tenetur quasi deleniti voluptas ex quisquam hic! Nihil, cupiditate recusandae.</p>
                            <h5>"C. Name"</h5>
                        </div>
                    </div>
                    <div class="reviews-box">
                        <div class="star">
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <div class="customer-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam tenetur quasi deleniti voluptas ex quisquam hic! Nihil, cupiditate recusandae.</p>
                            <h5>"C. Name"</h5>
                        </div>
                    </div>
                    <div class="reviews-box">
                        <div class="star">
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"> </i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <div class="customer-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam tenetur quasi deleniti voluptas ex quisquam hic! Nihil, cupiditate recusandae.</p>
                            <h5>"C. Name"</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="ft-text">&copy; 2024 <i class="fa-sharp fa-regular fa-copyright"></i> All rights reserved | made<i class="fa-sharp fa-solid fa-heart" id="heart"></i> by Clg Team</div>
        </footer>
    </div>




   
    </>
  )
}

export default Home1
