// import React, { Component } from "react";
// import Select from "react-select";
// import { emphasize, makeStyles, useTheme } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import NoSsr from "@material-ui/core/NoSsr";
// import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
// import MenuItem from "@material-ui/core/MenuItem";
// import PropTypes from "prop-types";
// import collegeList from "../../static-data/college-list";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2)
//   },
//   input: {
//     display: "flex",
//     padding: 0,
//     height: "auto"
//   },
//   valueContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     flex: 1,
//     alignItems: "center",
//     overflow: "hidden"
//   },
//   chip: {
//     margin: theme.spacing(0.5, 0.25)
//   },
//   chipFocused: {
//     backgroundColor: emphasize(
//       theme.palette.type === "light"
//         ? theme.palette.grey[300]
//         : theme.palette.grey[700],
//       0.08
//     )
//   },
//   noOptionsMessage: {
//     padding: theme.spacing(1, 2)
//   },
//   singleValue: {
//     fontSize: 16
//   },
//   placeholder: {
//     position: "absolute",
//     left: 2,
//     bottom: 6,
//     fontSize: 16
//   },
//   paper: {
//     position: "absolute",
//     zIndex: 1,
//     marginTop: theme.spacing(1),
//     left: 0,
//     right: 0
//   },
//   divider: {
//     height: theme.spacing(2)
//   }
// }));

// function NoOptionsMessage(props) {
//   return (
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.noOptionsMessage}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

// NoOptionsMessage.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.object,
//   selectProps: PropTypes.object.isRequired
// };

// function inputComponent({ inputRef, ...props }) {
//   return <div ref={inputRef} {...props} />;
// }

// inputComponent.propTypes = {
//   inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
// };

// function Control(props) {
//   const {
//     children,
//     innerProps,
//     innerRef,
//     selectProps: { classes, TextFieldProps }
//   } = props;

//   return (
//     <TextField
//       fullWidth
//       InputProps={{
//         inputComponent,
//         inputProps: {
//           className: classes.input,
//           ref: innerRef,
//           children,
//           ...innerProps
//         }
//       }}
//       {...TextFieldProps}
//     />
//   );
// }

// Control.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.object,
//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
//   selectProps: PropTypes.object.isRequired
// };

// function Option(props) {
//   return (
//     <MenuItem
//       ref={props.innerRef}
//       selected={props.isFocused}
//       component="div"
//       style={{
//         fontWeight: props.isSelected ? 500 : 400
//       }}
//       {...props.innerProps}
//     >
//       {props.children}
//     </MenuItem>
//   );
// }

// Option.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.object,
//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
//   isFocused: PropTypes.bool,
//   isSelected: PropTypes.bool
// };

// function Placeholder(props) {
//   return (
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.placeholder}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

// Placeholder.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.object,
//   selectProps: PropTypes.object.isRequired
// };

// function SingleValue(props) {
//   return (
//     <Typography
//       className={props.selectProps.classes.singleValue}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

// SingleValue.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.object,
//   selectProps: PropTypes.object.isRequired
// };

// function ValueContainer(props) {
//   return (
//     <div className={props.selectProps.classes.valueContainer}>
//       {props.children}
//     </div>
//   );
// }

// ValueContainer.propTypes = {
//   children: PropTypes.node,
//   selectProps: PropTypes.object.isRequired
// };

// function Menu(props) {
//   return (
//     <Paper
//       square
//       className={props.selectProps.classes.paper}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Paper>
//   );
// }

// Menu.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.object,
//   selectProps: PropTypes.object
// };

// const components = {
//   Control,
//   Menu,
//   NoOptionsMessage,
//   Option,
//   Placeholder,
//   SingleValue,
//   ValueContainer
// };

// export default class AutoCompleteSectorField extends Component() {

//   state = {
//     value: ""
//   };
//   handleChangeSingle = value => {
//     this.setState({ value: value });
//   };
//   render() {
//     const classes = useStyles();
//     const theme = useTheme();

//     const selectStyles = {
//       input: base => ({
//         ...base,
//         color: theme.palette.text.primary,
//         "& input": {
//           font: "inherit"
//         }
//       })
//     };
//     const colleges = collegeList.map(college => ({
//       value: college,
//       label: college
//     }));
//     return (
//       <div className={classes.root}>
//         <NoSsr>
//           <Select
//             // variant="outlined"
//             classes={classes}
//             styles={selectStyles}
//             inputId="react-select-single"
//             TextFieldProps={{
//               label: "College",
//               InputLabelProps: {
//                 htmlFor: "react-select-single",
//                 shrink: true
//               }
//             }}
//             options={colleges}
//             components={components}
//             value={this.state.value}
//             onChange={this.handleChangeSingle}
//           />
//           <div className={classes.divider} />
//         </NoSsr>
//       </div>
//     );
//   }
// }
