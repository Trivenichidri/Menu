import React, { useState, useEffect } from "react";

const Breakfast = () => {
  const [bmenu, setBmenu] = useState([
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 14.98,
      img: "https://thumbs.dreamstime.com/z/healthy-breakfast-homemade-classic-american-pancakes-maple-syrup-served-fingerfood-sticks-stack-small-bamboo-brochettes-180275497.jpg",
      desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 3,
      title: "American classic",
      category: "breakfast",
      price: 12.58,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntgwPT_zU6GItLWC1e1ZfphO1YMTIjrEGqQ&usqp=CAU",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
    },
    {
      id: 8,
      title: "country Delight",
      category: "Breakfast",
      price: 11.48,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/05/d3/6a/89/american-classic-breakfast.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
    },
    {
      id: 9,
      title: "country Delight",
      category: "Breakfast",
      price: 11.48,
      img: "https://i.pinimg.com/originals/9d/77/73/9d7773afa6d0af94d28e2b822e5067a1.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
    },
  ]);
  /*useEffect(() => {
    bmenu().then((item) => setBmenu(item));
  }, []);*/
  return (
    <div className="container">
      {bmenu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="Breakfast">
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
export default Breakfast;
