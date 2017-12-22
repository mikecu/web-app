import NavHeader from './NavHeader';
import Hero from './Hero';
import News from './News';
import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div>
                <Hero/>
                <News/>
            </div>
        );  
    }
}

export default Home;

