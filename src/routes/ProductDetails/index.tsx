import './style.css';

import HeaderClient from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonInverse from '../../components/ButtonInverse';

import { ProductDTO } from '../../models/product';

//=> Criar uma constante
const product: ProductDTO = {
  id: 2,
  name: 'Smart TV',
  description: 'TV Smart de 60" 4K HD 512GB bluetooth',
  imgUrl: 'https://raw.githubusercontent.com/MarceloJoia/dscatalog-resources/master/backend/img/1-big.jpg',
  price: 2952.99,
  categories: [
    {
      id: 2,
      nome: "Eletrônicos",
    },
    {
      id: 3,
      nome: "Computadores",
    },
  ]
};

export default function ProductDetails() {

  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
