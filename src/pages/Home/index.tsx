import React from 'react';
import { Container } from './styles';

import search from '../../assets/search.svg';
import fern from '../../assets/fern.png';
import aichryson from '../../assets/aichryson.png';
import callisia from '../../assets/callisia.png';
import citrofortunella from '../../assets/citrofortunella.png';

import plus from '../../assets/plus.png';
import book from '../../assets/book.svg';
import heart from '../../assets/heart.png';
import user from '../../assets/user.png';

const Home: React.FC = () => {
    return (
        <Container>         
            <h1>Houseplants</h1>  
            <div className="input-icon">
                <img src={search} alt="search-icon"/>  
                <input type="text" placeholder="            Search" className="filter"/>                    
            </div>        
                
            <div className="card-plants">
                <div className="card card-1">
                    <h3>Aichryson</h3>
                    <img src={aichryson} alt="aichryson"/>
                </div>
                <div className="card card-2">
                    <h3>Fern</h3>
                    <img src={fern} alt="fern"/>
                </div>
                <div className="card card-3">
                    <h3>Citrofortunella</h3>
                    <img src={citrofortunella} alt="citrofortunella"/>
                </div>
                <div className="card card-4">
                    <h3>Callisia</h3>
                    <img src={callisia} alt="callisia"/>
                </div>
            </div>

            <footer>
                <div className="footer-plus"><img src={plus}/></div>                
                <img src={book} alt="book"/>
                <img src={heart} alt="heart"/>
                <img src={user} alt="user"/>
            </footer>
        </Container>
    )
}

export default Home;