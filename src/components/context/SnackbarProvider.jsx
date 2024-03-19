import React, { createContext, useReducer, useCallback } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const initialState = {
  open: false,
  severity: "success",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SNACKBAR":
      return { ...state, open: true, ...action.payload };
    case "HIDE_SNACKBAR":
      return { ...state, open: false };
    default:
      return state;
  }
};

export const SnackbarContext = createContext();

export const useSnackbar = () => React.useContext(SnackbarContext);

const SnackbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showSnackbar = useCallback(
    (payload) =>
      dispatch({
        type: "SHOW_SNACKBAR",
        payload,
      }),
    []
  );

  const hideSnackbar = useCallback(() => {
    dispatch({ type: "HIDE_SNACKBAR" });
  }, []);

  return (
    <SnackbarContext.Provider value={{ state, showSnackbar, hideSnackbar }}>
      {children}
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={hideSnackbar}
      >
        <Alert
          onClose={hideSnackbar}
          severity={state.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
