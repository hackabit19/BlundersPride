import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const RegisterButton = withStyles({
  root: {
    color: "#FF3D00",
    borderColor: "#FF3D00",
    "&:hover": {
      color: "white",
      borderColor: "#F66604",
      backgroundColor: "#F66604"
    }
  }
})(Button);

const IDEButton = withStyles({
  root: {
    color: "388E3C",
    borderColor: "#white",
    padding: "0px",
    borderRadius: "50px",
    "&:hover": {
      color: "white",
      borderColor: "#4CAF50",
      backgroundColor: "#4CAF50"
    }
  }
})(Button);

const NavButton = withStyles({
  root: {
    color: "#BDBDBD",
    "&:hover": {
      color: "white"
    }
  }
})(Button);

export { RegisterButton, NavButton, IDEButton };
