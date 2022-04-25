import React, { useState } from "react";
import Data from "./Data";

const Shakes = () => {
  const [smenu, setSmenu] = useState([
    {
      id: 9,
      title: "oreo dream",
      category: "shakes",
      price: 15.18,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 6,
      title: "Godzilla milshakes",
      category: "shakes",
      price: 7.98,
      img: "https://eatmodeon.com/wp-content/uploads/2019/10/WhatsApp-Image-2020-09-17-at-1.09.03-PM.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ]);
  return (
    <div className="container">
      {smenu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="Shakes">
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

export default Shakes;
