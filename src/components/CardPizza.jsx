import React from 'react';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold text-capitalize">Pizza {name}</h5>
        <hr />
         <p className="card-text text-muted small text-secondary">{desc}</p>
        <p className="card-text text-muted mb-1">🍕 Ingredientes:</p>
        
        {/* Renderizado dinámico de ingredientes en etiquetas li exigido por la rúbrica */}
        <ul className="list-unstyled mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-capitalize small text-secondary">
              • {ingredient}
            </li>
          ))}
        </ul>
        
        <hr />
        <p className="card-text h5 fw-bold mb-3 text-dark">
          Precio: ${price.toLocaleString('es-CL')}
        </p>
        <div className="d-flex justify-content-around">
          <button className="btn btn-light btn-sm border">👀 Ver Más</button>
          <button className="btn btn-dark btn-sm">🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
