import React, { useState } from "react";
import Data from "./Data";

const All = () => {
  const [menu, setMenu] = useState(Data);

  return (
    <div className="container">
      {menu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="all-item">
            <hr />
            <div>
              <img src={img} alt={title} className="img" />
            </div>
            <div className="items">
              <header>
                <h3>{title}</h3>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default All;
