import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      &copy; 2021 {"    "}
      <a href="https://github.com/Twin-2">
        <BsGithub />
      </a>
      {"    "}
      <a href="https://www.linkedin.com/in/david-whitmore-501273160/">
        <BsLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
