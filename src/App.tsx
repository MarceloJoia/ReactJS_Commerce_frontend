import './App.css';

import ProductDetailsCard from './components/ProductDetailsCard';
import HeaderClient from './components/HeaderClient';
import ButtonInverse from './components/ButtonInverse';
import ButtonPrimary from './components/ButtonPrimary';

function App() {

  return (
    <>

    <HeaderClient/>
      
    <main>
      <section id="product-details-section" className="dsc-container">
        
        <ProductDetailsCard />

        <div className="dsc-btn-page-container">

            <ButtonPrimary />
            <ButtonInverse />

        </div>
        
      </section>
    </main>

    </>
  );
}

export default App;
