import React from 'react'
import Scroll from './scroll';
import History from './Hist';
import Footer from './Footer';
import Navi from './Nav';
function Home() {
    return (
        <div>
            <Navi />
            <Scroll />
            <History />
            <Footer />
        </div>
    )
}

export default Home