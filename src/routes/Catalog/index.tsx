import './style.css';

import HeaderClient from "../../components/HeaderClient";
import ButtonNexPage from '../../components/ButtonNexPage';
import SearchBar from '../../components/SeachBar';
import CatalogCard from '../../components/CatalogCard';
import { ProductDTO } from '../../models/product';


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
export default function Catalog() {

    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="dsc-container">

                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />

                    </div>

                    <ButtonNexPage name="Carregar mais" />

                </section>
            </main>
        </>
    );
}