import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card.js';
import { NavBar } from '../components/NavBar.js';
import '../styles/pages/_home.scss'
export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products?q=oil")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


  console.log(products)


  return (
    <section id='home'>
      <div className='home-container'>
        <h1>Gallery</h1>
        <div className='home-card'>
          {
            products.filter(product => {
              if (searchKey === "") {
                return true
              } else {
                return product.name.toLowerCase().includes(searchKey)
              }
            }).map(product => {
              return <Card
                name={product.name}
                picture={product.picture}
                price={product.price}
                isActive={product.isActive}
              />
            })
          }
        </div>
      </div>
    </section>
  );
};
