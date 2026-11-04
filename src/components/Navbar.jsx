import React from 'react';

const Navbar = ({ totalAmount = 0, totalCount = 0 }) => {

  
  return (
    <nav style={{backgroundColor: 'black'}}>
      <div>
        
        <div style={{ display: 'flex', flexDirection: 'file', minHeight: '2rem', gap: '10px', padding: '10px' }}>
          <span 
            style={{ cursor: "pointer", color: 'white' }} 
            onClick={(e) => cambiarVista(e, "home")}
          >
            Pizzería Mamma Mía!
          </span>
          
          <button 
            type="button" 
            onClick={(e) => cambiarVista(e, "home")}
          >
            🍕 Home
          </button>

          <button 
            type="button"
            onClick={(e) => cambiarVista(e, "login")}
          >
            🔐 Login
          </button>

          <button 
            type="button" 
            onClick={(e) => cambiarVista(e, "register")}
          >
            🔒 Register
          </button>
   
        <div className='ms-auto'>
          <button type="button" className="btn btn-outline-info btn-sm px-3 fw-bold d-flex align-items-center gap-2">
          
            <div className="d-flex align-items-center
             gap-1">
              <span>🛒</span>
              {totalCount > 0 && (
                <span className="badge bg-info text-dark rounded-pill px-1.5 py-0.5 small shadow-sm" style={{ fontSize: "0.75rem" }}>
                  {totalCount}
                </span>
              )}
            </div>
           
            <span>Total: ${totalAmount.toLocaleString("es-CL")}</span>
          </button>
       </div>
        </div>

      </div>
    </nav>
  );
};







export default Navbar;
            
