import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
import "../assets/css/lg-view.css";
import "../assets/css/med-view.css";
import "../assets/css/overrides.css";
import featuredPost from "../image/featuredPost.jpg";

const FeauturedPost = (props) => {
  return (
    <section className="featured">
      <div className="feat-text">
        <div className="feat-image">
          <img alt="river" src={featuredPost} />
        </div>

        <h4>Feautered article</h4>
        <h3>{props.title}</h3>

        <h5 id="author">By Sam Fischer</h5>
        <p>
          Lorem ipsum dolor sit amet:
          <q>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </q>
          <br />
          Duis aute irure <u>dolor in reprehenderit</u> in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Etiam tempor orci eu lobortis elementum nibh. Leo integer
          malesuada nunc vel risus commodo
        </p>
        <Link to="/article_one">Find out more ...</Link>
      </div>
    </section>
  );
};

export default FeauturedPost;
