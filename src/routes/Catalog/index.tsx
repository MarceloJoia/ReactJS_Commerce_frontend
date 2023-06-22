import './style.css';

import HeaderClient from "../../components/HeaderClient";
import ButtonNexPage from '../../components/ButtonNexPage';
import SearchBar from '../../components/SeachBar';
import CatalogCard from '../../components/CatalogCard';

export default function Catalog() {

    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="dsc-container">

                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />

                    </div>

                    <ButtonNexPage />

                </section>
            </main>
        </>
    );
}