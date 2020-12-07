import React from 'react';
import cartoes from '../img/bandeirasdecartaomundipagg.webp';
import '../components/Footer.css'; 

class Footer extends React.Component {
    render(){
        return(
            <footer id="cartoes" className="aceitar-cartoes">
                <h3 className="text-lojas">Aceitamos Cartões</h3>
                <img className="img_lojas"  src={cartoes} />
            </footer>
        );
    }
}


export default Footer;