import { Watch } from '../../Featured/featuredCard/FeatureCard'
import './productscard.css'

const ProductsCard = (props: Watch) => {
  return (
    <article className="products__card">
            <img src={props.image} alt="" className="products__img"/>

            <h3 className="products__title">{props.title}</h3>
            <span className="products__price">${props.price}</span>

            <button className="products__button">
                <i className='bx bx-shopping-bag'></i>
            </button>
        </article>
        )
}

export default ProductsCard