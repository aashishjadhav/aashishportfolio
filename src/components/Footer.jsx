import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://i.postimg.cc/vHx93dws/IMG-20230627-235632.jpg "}
          alt="Founder"
        />

        <h2>Aashish</h2>
        <p>Nothing is permanent.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://www.linkedin.com/in/aashish-jadhav-622180221" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/aashishjadhav" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;