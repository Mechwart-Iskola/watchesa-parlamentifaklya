import { useEffect, useState } from 'react'
import './featured.css'
import FeatureCard, { Watch } from './featuredCard/FeatureCard'

const Featured = () => {

  const [watches, setWatches] = useState<Watch[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("featured.json");
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
    <section className="featured" id="featured">
    <h2 className="feature__title">Featured</h2>
    <div className="featured__container">
      {watches.map((item, idx) => (
        <FeatureCard key={idx} title={item.title} price={item.price} image={item.image}/>
      ))}
    </div>
</section>
  )
}

export default Featured