import React from "react";
import {
  TextField,
  makeStyles,
  FormHelperText,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import Aux from "../../hoc/Aux";
import isEmpty from "../../validations/is-empty";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "95%",
    marginTop: theme.spacing(2)
  },
  errorText: {
    marginLeft: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "220px"
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    minWidth: "220px",
    float: "left"
  }
}));

export const TextFieldInput = props => {
  const classes = useStyles();
  const error = props.errormsg;
  return (
    <Aux>
      <TextField
        className={classes.textField}
        {...props}
        error={!isEmpty(error)}
      />
      {isEmpty(error) ? null : (
        <FormHelperText error className={classes.errorText}>
          {error}
        </FormHelperText>
      )}
    </Aux>
  );
};

export const SelectorInput = props => {
  const classes = useStyles();
  const error = props.errormsg;
  return (
    <Aux>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        error={!isEmpty(error)}
      >
        <InputLabel htmlFor="type">Type</InputLabel>
        <Select {...props} className={classes.selectEmpty}>
          {props.children}
        </Select>
        {isEmpty(error) ? null : (
          <FormHelperText error className={classes.errorText}>
            {error}
          </FormHelperText>
        )}
      </FormControl>
    </Aux>
  );
};
