import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

/* This reducer fucntion can define outside of the jsx component,
  because it doesnt have any value which are getting or generated in the jsx component.
*/

/*This useReducer function is only used where some state variable value changing depends on other variable, 
 or some other usecases are where have to manage complex state.
*/


  // Here the state is passed by the react which is always the correct state.

const emailReducerFunc = (state, action) => {
  switch (action.type) {
    case "UPDATE_MAIL":
      return { value: action.val, isValid: true };
    case "VALIDATE":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: state.value, isValid: false };
  }
};

const passwordReducerFunc = (state, action) => {
  switch (action.type) {
    case "UPDATE_PASSWORD":
      return { value: action.val, isValid: true };
    case "VALIDATE":
      return { value: state.value, isValid: state.value.length > 6 };
    default:
      return { value: state.value, isValid: false };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducerFunc, {
    value: "",
    isValid: true,
  });

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducerFunc, {
    value: "",
    isValid: true,
  });

  useEffect(() => {
    // This anounymous function only executes if the enteredEmail and enteredPassword is change.
    const timeOutIndetiti = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes("@") && passwordState.value.trim().length > 6
      );
    }, 500);

    return () => {
      // This is a cleanup function, it executes each time before useEffect anonymous function execute except for the first time rendering of the component.

      clearTimeout(timeOutIndetiti); // It clear the previously rendered timeOutIndetifier not the current.

      // For this in the setTimeOut finction not changeing the request because it clear the setTimeOut so for each letter the validity not checked.
    };
  }, [emailState.value, passwordState.value]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "UPDATE_MAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "UPDATE_PASSWORD", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: "VALIDATE", val: null });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "VALIDATE", val: null });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !emailState.isValid ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            !passwordState.isValid ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
