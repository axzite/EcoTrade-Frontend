import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className="explore-menu" id="explore-menu">
      <div className="home-discription">
        <h1>
          Welcome to <span className="red-color">Khara AgroTech</span>
        </h1>
       <p>
  <strong>Khara AgroTech</strong> is your trusted <strong>online agro store in India</strong> and the official website for premium <strong>agro products</strong> sourced directly from <strong>Indian farmers</strong>. Based in <strong>Gondia, Maharashtra</strong>, and rooted in the village of <strong>Khara</strong>, Khara AgroTech offers a seamless way to buy fresh, <strong>organic grains and pulses online</strong>. Whether you're searching for <strong>Idli Rice</strong>, <strong>Biryani Rice</strong>, <strong>Chana Dal</strong>, <strong>Urad Dal</strong>, <strong>Besan</strong>, or <strong>Thick Poha</strong>, we guarantee <strong>high-quality products</strong> with hygienic packaging and doorstep delivery at affordable prices.

  Our flagship brand, <strong>Bhogprada</strong>, is known for <strong>purity, tradition, and trust</strong> — offering the <strong>best rice in Balaghat</strong> along with a wide range of authentic agro products across <strong>Maharashtra</strong>. With <strong>24/7 customer support</strong> and a strong focus on quality, Khara AgroTech aims to become <strong>India’s most reliable AgroTech brand</strong>.
</p>

        <h1>Explore our Food Basket</h1>

        <p className="explore-menu-text">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>                                                                        
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                className= {category === item.menu_name ? "active" : ""}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
