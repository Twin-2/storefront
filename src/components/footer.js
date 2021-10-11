import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Paper } from "@mui/material";

function Footer() {
  return (
    <Paper className="footer" elevation={2}>
      &copy; 2021 {"    "}
      <a href="https://github.com/Twin-2">
        <BsGithub />
      </a>
      {"    "}
      <a href="https://www.linkedin.com/in/david-whitmore-501273160/">
        <BsLinkedin />
      </a>
    </Paper>
  );
}

export default Footer;
