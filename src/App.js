import React from "react";
import FeauturedPost from "./components/feauturePost";
import Header from "./components/header";
import Navbar from "./components/navbar";
import "./assets/css/styles.css";
import "./assets/css/lg-view.css";
import "./assets/css/med-view.css";
import "./assets/css/overrides.css";
import {
  PostCardOne,
  PostCardTwo,
  PostCardThree,
  PostCardFour,
  PostCardFive,
  PostCardSix,
} from "./components/postCards";
import { SideBar } from "./components/sidebar";
import Footer from "./components/footer";
import BlogPost from "./components/blogPost";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <FeauturedPost title="Rivers and our planet" />
      <section className="post">
        <PostCardOne title="Japanese Umbrellas" caption="Colorful Umbrellas" />
        <PostCardTwo title="Acropolis" caption="A historic icon" />
        <PostCardThree title="The bird!" caption="Master in singing!" />
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
};

const Article_One = () => {
  return(
  <div className="container">
    <Header />
    <Navbar />
    <BlogPost title="Manhattan bridge!" caption="Fig1. View from north" author="By Richard Adams" autor_bio="Senior writer at Light up"/>
    <aside className="sidebar">
     <SideBar />
    </aside>
    <Footer />
  </div>
  );
};
export { App , Article_One } ;
