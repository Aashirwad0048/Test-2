import React, { useState } from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Fridge", price: 10000 },
    { id: 3, name: "AC", price: 30000 }
  ];

  const [cart, setCart] = useState([]);

  const toggleCart = (product) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.some((item) => item.id === product.id);

      if (isAlreadyInCart) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return [...prevCart, product];
      }
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const styles = {
    container: { 
      fontFamily: 'system-ui, sans-serif', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      marginTop: '50px', 
      color: '#333' 
    },
    header: { color: '#1a365d',
       marginBottom: '20px', 
       fontSize: '1.5rem', 
       fontWeight: 'bold' 
      },
    table: { borderCollapse: 'collapse', 
      width: '500px', 
      boxShadow: '0 0 10px rgba(0,0,0,0.05)', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      border: '1px solid #dee2e6' 
    },
    th: { 
      backgroundColor: 'lightgrey', 
      padding: '15px', 
      textAlign: 'left', 
      fontWeight: '600', 
      // color: '#495057', 
      borderBottom: '2px solid #dee2e6' 
    },
    td: { 
      padding: '15px', 
      borderBottom: '1px solid #dee2e6', 
      verticalAlign: 'middle' 
    },
    btnGreen: { 
      backgroundColor: 'green', 
      color: 'white', 
      border: 'none', 
      padding: '8px 16px', 
      borderRadius: '4px', 
      fontWeight: '500', 
      width: '100%' 
    },
    btnRed: { 
      backgroundColor: 'red', 
      color: 'white', 
      border: 'none', 
      padding: '8px 16px', 
      borderRadius: '4px', 
      fontWeight: '500', 
      width: '100%' },
    totalBox: {
       marginTop: '20px', 
       backgroundColor: 'lightgrey', 
       width: '500px', 
       padding: '15px 0', 
       textAlign: 'center', 
       borderRadius: '6px', 
       fontSize: '1.2rem', 
       fontWeight: 'bold', 
      //  color: 'grey' 
      }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Product List</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Product Name</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const isInCart = cart.some((item) => item.id === product.id);
            
            return (
              <tr key={product.id}>
                <td style={styles.td}>{product.name}</td>
                <td style={styles.td}>{product.price}</td>
                <td style={styles.td}>
                  <button 
                    style={isInCart ? styles.btnRed : styles.btnGreen}
                    onClick={() => toggleCart(product)} 
                  >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={styles.totalBox}>
        Total Price: {total}
      </div>
    </div>
  );
};

export default ProductList;