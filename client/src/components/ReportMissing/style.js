export const style = theme => ({
  container: {
    textAlign: "center",
    minWidth: "320px"
  },
  title: {
    color: "#263338",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    float: "left"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "120px"
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    minWidth: "120px",
    float: "left"
  },
  registerButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: "#35BE34",
    borderColor: "#35BE34",
    "&:hover": {
      color: "white",
      backgroundColor: "#35BE34"
    }
  }
});
