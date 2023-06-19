import React from 'react'
import Scroll from './scroll';
import History from './Hist';
import Footer from './Footer';
import Navi from './Nav';
import News from './News';
function Home() {
    return (
        <div>
            <Navi />
            <Scroll />
            <News />
            <History />
            <Footer />
        </div>
    )
}

export default Home