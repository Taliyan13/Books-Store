import ProductItem from './ProductItem';
import classes from './Products.module.css';

//array of products
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'How i met your mother',
    description: 'Homoristic story - amazing!'
  },
  {
    id: 'p2',
    price: 7,
    title: 'Romantic book',
    description: 'Jane and Rob story'
  },
  {
    id: 'p3',
    price: 8,
    title: 'Drama book',
    description: 'Who kill doctor Pill?'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
