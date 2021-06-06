import React from 'react';
import FeauturedPost from './components/feauturePost';
import Header from './components/header';
import Navbar from './components/navbar';
import './assets/css/styles.css';
import './assets/css/lg-view.css';
import './assets/css/med-view.css';
import './assets/css/overrides.css';
import { PostCardOne , PostCardTwo , PostCardThree , PostCardFour, PostCardFive, PostCardSix} from './components/postCards';
import { SideBar } from './components/sidebar';
import Footer from './components/footer'

function App() {
  return (
    <div className='container'>
    <Header />
    <Navbar />
    <FeauturedPost title='Rivers and our planet' />
    <section className='post'>
<PostCardOne title="Japanese Umbrellas" caption="Colorful Umbrellas"/>
<PostCardTwo title="Acropolis" caption="A historic icon"/>
<PostCardThree title="The bird!" caption="Master in singing!"/>
<PostCardFour title="Manhattan Bridge" caption="Sturdy structure" />
<PostCardFive title="Coffee lovers!" caption="Daily booster" />
<PostCardSix title="Plants" caption="Greenery" />
    </section>
    <aside className="sidebar">
<SideBar />
    </aside>   
    <Footer /> 
</div>
  );

}

export default App;
