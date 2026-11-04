import { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CardPizza from "./CardPizza"

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img} 
              id={pizza.id}
               desc={pizza.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
