import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../data/productData";
import ProductCard from "./cards/ProductCard";
import {useAutoAnimate} from '@formkit/auto-animate/react'

const BestSeller = () => {
  const [parent] = useAutoAnimate()
  const [MiniMenu, setMiniMenu] = useState(Products);

  const filter = (category) => {
    setMiniMenu(Products.filter((product) => product.category === category));
  };

  return (
    <div className="best-seller">
      <ul className="p-categories">
        <li onClick={() => setMiniMenu(Products)}>All</li>
        <li onClick={() => filter("bags")}>Bags</li>
        <li onClick={() => filter("sneakers")}>Sneakers</li>
        <li onClick={() => filter("belts")}>Belts</li>
        <li onClick={() => filter("sunglasses")}>Sunglasses</li>
      </ul>

      <div className="p-list" ref={parent}>
        {MiniMenu.map((item, i) => {
          return (
            <ProductCard
              key={i}
              image={item.image}
              title={item.name}
              price={item.price}
              discount={item.discount}
              percent={item.percent}
              rating={item.rating}
            />
          );
        })}
      </div>

      <span className="load-more">
        <Link>load more</Link>
      </span>
    </div>
  );
};

export default BestSeller;
