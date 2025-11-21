import React, { useEffect } from 'react';
import { io } from './socket'; // Import the socket instance

function App() {
  useEffect(() => {
    // Listen for real-time product updates
    io.on('product_update', (product) => {
      console.log('New product added or updated:', product);
      // You can update your state here to reflect the change in the UI
      alert(`A new product has been added: ${product.name}`);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      io.off('product_update');
    };
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Queen of Her Yard</h1>
      {/* Your React components for business listings, products, etc. will go here */}
    </div>
  );
}

export default App;