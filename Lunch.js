import { useState } from "react";

const Lunch = () => {
  const [lmenu, setLmenu] = useState([
    {
      id: 2,
      title: "Quarentine buddy",
      category: "lunch",
      price: 9.98,
      img: "https://c8.alamy.com/comp/2BJ8G61/traditional-american-lunch-top-view-2BJ8G61.jpg",
      desc: `I'm baby of buddy because im a timepass lunch where everone eat me`,
    },
    {
      id: 3,
      title: "American classic",
      category: "breakfast",
      price: 12.58,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntgwPT_zU6GItLWC1e1ZfphO1YMTIjrEGqQ&usqp=CAU",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
      id: 4,
      title: "Dinner Double",
      category: "lunch",
      price: 8.98,
      img: "https://www.food-management.com/sites/food-management.com/files/Yakisoba_with_Chicken_and_Vegetables_0.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: 10.99,
      img: "https://i.pinimg.com/originals/d5/13/e2/d513e2b7b71cadfdff4077c552c4f77d.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    },
  ]);

  return (
    <div className="container">
      {lmenu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="Lunch">
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
export default Lunch;
