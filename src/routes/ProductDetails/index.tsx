import './style.css';

import HeaderClient from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonInverse from '../../components/ButtonInverse';

import { ProductDTO } from '../../models/product';

//=> Criar uma constante e base MOCK
//=> Objeto Auxiliar Produto
const product: ProductDTO = {
  id: 2,
  name: 'Smart TV',
  description: 'TV Smart de 60" 4K HD 512GB bluetooth',
  imgUrl: 'https://raw.githubusercontent.com/MarceloJoia/dscatalog-resources/master/backend/img/1-big.jpg',
  price: 2952.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
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
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Inicio" />
          </div>
        </section>
      </main>
    </>
  );
}
