import React from 'react';
import { pizzaCart } from "./pizzas.js";

const Cart = ({ cart, setCart, totalAmount }) => {

  const increaseCount = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, count: (item.count || 0) + 1 } : item));
  };

  const decreaseCount = (id) => {
    setCart(
      cart
        .map(item => item.id === id ? { ...item, count: (item.count || 0) - 1 } : item)
        .filter(item => item.count > 0)
    );
  };

  return (
    <div className="container my-5 p-4 bg-white rounded shadow-sm" style={{ maxWidth: "600px" }}>
      <h4 className="fw-bold mb-4 border-bottom pb-2">Detalles del pedido:</h4>
      
      {cart.length === 0 ? (
        <p className="text-muted text-center my-4">Tu carrito está vacío 🍕</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {cart.map((item) => {
          
            const pizzaImg = item.img;
            const price = item.price || 0;
            const count = item.count || 0;

            return (
              <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom pb-3">
                
                <div className="d-flex align-items-center gap-3">
                  <img 
                    src={pizzaImg} 
                    alt={item.name} 
                    style={{ width: "65px", height: "65px", objectFit: "cover", borderRadius: "8px" }} 
                  />
                  <span className="fw-bold text-capitalize text-dark fs-5">{item.name}</span>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-semibold text-success fs-5">
                    ${(price * count).toLocaleString('es-CL')}
                  </span>
                  
                  <div className="d-flex align-items-center border rounded bg-light">
                    <button 
                      type="button" 
                      className="btn btn-sm btn-light fw-bold text-danger px-3 py-1 border-end"
                      onClick={() => decreaseCount(item.id)}
                    >
                      -
                    </button>
                    <span className="px-3 fw-bold fs-5 text-secondary">{count}</span>
                    <button 
                      type="button" 
                      className="btn btn-sm btn-light fw-bold text-primary px-3 py-1 border-start"
                      onClick={() => increaseCount(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

          <div className="mt-4 pt-2 d-flex justify-content-between align-items-center">
            <h3 className="fw-bold text-dark m-0">
              Total: <span className="text-primary">${totalAmount.toLocaleString('es-CL')}</span>
            </h3>
            <button className="btn btn-dark btn-lg px-4 fw-bold shadow-sm">Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
