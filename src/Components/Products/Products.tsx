import { useState, useEffect } from 'react';
import { Watch } from '../Featured/featuredCard/FeatureCard';
import './products.css'
import ProductsCard from './ProductsCard/ProductsCard'

const Products = () => {

  const [watches, setWatches] = useState<Watch[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("products.json");
        if (!res.ok) {
          console.error("Network error!")
        }
        const data = await res.json();
        setWatches(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData();
  }, [])

  return (
    <section className="products container" id="products">
    <h2 className="section__title">
        Products
    </h2>

    <div className="products__container">
      {watches.map((item, idx) => (
        <ProductsCard key={idx} title={item.title} price={item.price} image={item.image}/>
      ))}
    </div>
</section>
  )
}

export default Products