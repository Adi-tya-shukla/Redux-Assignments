import ProductItem from './ProductItem';
import classes from './Products.module.css';

const productDummy =[
  {
    id: 1,
    title: "Product A",
    price: 19.99,
    description: "This is an amazing product that will make your life easier."
  },
  {
    id: 2,
    title: "Product B",
    price: 29.99,
    description: "Upgrade your daily routine with the incredible features of this product."
  },
  {
    id: 3,
    title: "Product C",
    price: 9.99,
    description: "A budget-friendly option without compromising on quality."
  },
  {
    id: 4,
    title: "Product D",
    price: 49.99,
    description: "Experience the future with this cutting-edge product designed to amaze."
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productDummy.map((product) => 
        <ProductItem
        key ={ product.id}
        id = { product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
