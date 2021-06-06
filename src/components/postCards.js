import React from "react";
import '../assets/css/styles.css';
import '../assets/css/lg-view.css';
import '../assets/css/med-view.css';
import '../assets/css/overrides.css';
import post_1 from '../image/post_1.jpg';
import post_2 from '../image/post_2.jpg';
import post_3 from '../image/post_3.jpg';
import post_4 from '../image/post_4.jpg';
import post_5 from '../image/post_5.jpg';
import post_6 from '../image/post_6.jpg';

export const PostCardOne = (props) => {
  return (
    <div className="post-1 card">
      <figure>
        <img
          className="post-image"
          alt="Japanese Umbrellas"
          src={post_1}
        />
        <figcaption>{props.caption}</figcaption>
      </figure>
      <h2>{props.title}</h2>
      <h5 id="card">By Lisa Bright</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu
        lobortis elementum nibh. Leo integer malesuada nunc vel risus commodo
      </p>
      <a href="blog-post.html">Read more ...</a>
    </div>
  );
};

export const PostCardTwo = (props) => {
  return (
    <div className="post-2 card">
      <figure>
        <img className="post-image" alt="Acropolis" src={post_2} />
        <figcaption>{props.caption}</figcaption>
      </figure>
      <h2>{props.title}</h2>
      <h5 id="card">By Jay Clarck</h5>
      <p>
        Sed do eiusmod tempor incididunt ut labore et dolore magna consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Leo integer
        malesuada nunc vel risus commodo
      </p>
      <a href="blog-post.html">Read more ...</a>
    </div>
  );
};

export const PostCardThree = (props) => {
    return (
<div className="post-3 card">
                    <figure>
                        <img className="post-image" alt="The bird!" src={post_3} />
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                    <h2>{props.title}</h2>
                    <h5 id="card">By Angela Jones</h5>
                    <p>
                        consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Leo integer malesuada
                        nunc vel risus commodo
                    </p>
                    <a href="blog-post.html">Read more ...</a>
                </div>
    );
};

export const PostCardFour = (props) => {
  return(
    <div className="post-4 card">
                    <figure>
                        <img className="post-image" alt="Manhattan Bridge" src={post_4} />
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                    <h2>{props.title}</h2>
                    <h5 id="card">By Richard Adams</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Leo integer malesuada nunc vel risus commodo
                    </p>
                    <a href="blog-post.html">Read more ...</a>
                </div>

  );
};

export const PostCardFive = (props) => {
  return(
    <div className="post-5 card">
                    <figure>
                        <img className="post-image" alt="Coffee" src={post_5} />
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                    <h2>{props.title}</h2>
                    <h5 id="card">By Rachel Jackson</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Leo integer malesuada nunc vel risus commodo
                    </p>
                    <a href="blog-post.html">Read more ...</a>
                </div>
  );
};

export const PostCardSix = (props) => {
return(
  <div className="post-6 card">
                    <figure>
                        <img className="post-image" alt="Plants" src={post_6} />
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                    <h2>{props.title}</h2>
                    <h5 id="card">By Brian Kelly</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Leo integer malesuada nunc vel risus commodo
                    </p>
                    <a href="blog-post.html">Read more ...</a>
                </div>
)

}
// export default PostCardOne;
