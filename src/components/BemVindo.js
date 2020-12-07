import React from 'react';
import '../components/BemVindo.css';




class BemVindo extends React.Component{
    render(){
        return(
            <main className="inicio-apres">
                <h1><b>Sejam Bem Vindx!!!</b> </h1>
                <br/>
                <br/>
                <h2 id="nomeCliente"> </h2>
                <br/>
                <p> Acessem Nossa Plataforma e Comprem Nossos Produtos...</p>
            </main>
        );
    }
}


export default BemVindo;