import React, { useState, useEffect } from 'react';
import { Chart } from '../components/Chart';
export const Report = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products?q=oil")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <Chart></Chart>
      </div>
    </section>
  );
};
