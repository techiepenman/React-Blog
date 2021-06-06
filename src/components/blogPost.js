import React from "react";
import "../assets/css/styles.css";
import "../assets/css/lg-view.css";
import "../assets/css/med-view.css";
import "../assets/css/overrides.css";
import post_4 from "../image/post_4.jpg";
import avatar from "../image/avatar.png";

const BlogPost = (props) => {
  window.scrollTo(0, 0);

  return (
    <section className="featured">
      <div className="feat-text">
        <div className="feat-image">
          <figure>
            <img src={post_4} alt={props.title}/>
            <figcaption>{props.caption}</figcaption>
          </figure>
        </div>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        <img id="avatar" src={avatar} alt="" />
        <h5>{props.author_bio}</h5>
        <h6>
          The author short bio qui officia deserunt mollit anim id est laborum.
          Duis aute irure dolor commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse
        </h6>
        <hr id="post" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. <u>Excepteur sint occaecat cupidatat</u>non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. culpa
          qui officia deserunt mollit anim id est laborum. Duis aute irure dolor
          in pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
          dolor in reprehenderit in voluptate velit esse
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <b>Excepteur sint occaecat</b> cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Duis aute irure dolor
          in reprehenderit in voluptate <u>velit esse cillum</u> dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <i>Lorem ipsum dolor</i> sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          ornare massa eget egestas.
        </p>
        Massa enim nec dui nunc mattis enim ut tellus elementum. Tristique
        sollicitudin nibh sit amet commodo nulla facilisi. Risus nullam eget
        felis eget nunc. Et magnis dis parturient montes. In massa tempor nec
        feugiat. Tellus orci ac auctor augue mauris augue neque gravida in. Nam
        libero justo laoreet sit. MassaUltrices dui sapien eget mi proin sed
        libero enim sed. Mauris in aliquam sem fringilla ut morbi. Bibendum est
        ultricies integer quis auctor elit sed vulputate. Feugiat pretium nibh
        ipsum consequat nisl vel pretium lectus.
        <p>
          Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Facilisis
          magna etiam tempor orci eu lobortis elementum nibh tellus. Vitae
          elementum curabitur vitae nunc sed velit. Adipiscing tristique risus
          nec feugiat. Amet consectetur adipiscing elit pellentesque habitant
          morbi. Potenti nullam ac tortor vitae purus faucibus ornare
          suspendisse sed. Amet massa vitae tortor condimentum lacinia quis. Eu
          tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Augue
          interdum velit euismod in. Sit amet mauris commodo quis imperdiet
          massa tincidunt nunc pulvinar.
        </p>
        <hr id="post" />
        <h4>Share :</h4>
        <i className="social-icons fab fa-facebook-f"></i>
        <i className="social-icons fab fa-twitter"></i>
        <i className="social-icons fas fa-envelope"></i>
        <i className="social-icons fab fa-linkedin-in"></i>
      </div>
    </section>
  );
};

export default BlogPost;
