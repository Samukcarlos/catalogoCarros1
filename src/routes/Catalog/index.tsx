import './styles.css';

import Card from '../../components/Card';
import Header from '../../components/Header';
import CardSecundary from '../../components/CardSecundary';
import Footer from '../../components/Footer';

export default function Catalog(){
    return (
      <>
        <Header />
        <main className="ct-catalog-main">
            <section id="ct-catalog-section" className='ct-container'>

                <div className="ct-catalog-cards-container">
                  <Card />
                  <Card />
                </div>
            </section>
            <section >
            <div>
              <h3>Oque estão dizendo</h3>              
            </div>
            <div >
            <CardSecundary />
            <CardSecundary />
            <CardSecundary />
            <CardSecundary />
            <CardSecundary />
            <CardSecundary />
            </div>
             </section>
        </main> 
        <Footer />   
      </> 
    );
}