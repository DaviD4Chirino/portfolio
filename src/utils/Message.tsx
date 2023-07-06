import { Snackbar, Button, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
type MessageT = {
  open: boolean;
  setOpen: (state: boolean) => void;

  closeOnClickAway?: boolean;
  message?: string;
  duration?: number;
  alert?: "error" | "warning" | "info" | "success";
  props?: any;
  snackBarProps?: {};
  anchor?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
  action?: JSX.Element;

  id?: string;
  className?: string;
};
/**
 * ### A wrapper for the Mui Snackbar
 *
 * @example
 <button onClick={() => setOpen(true)}>Click</button>
 <Message open={open} setOpen={setOpen} message="Hello"  />
 */
export default function Message({
  open,
  setOpen,
  closeOnClickAway,
  message,
  duration = 3000,
  alert,
  snackBarProps,
  anchor,
  action,
  id,
  className,
  ...props
}: MessageT) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    //cspell:disable-next-line

    setOpen(false);
  };
  if (alert) {
    return (
      <div
        className={"module message " + className}
        style={{ position: "absolute" }}
        {...props}
      >
        <Snackbar
          {...snackBarProps}
          open={open}
          autoHideDuration={duration}
          onClose={handleClose}
          anchorOrigin={anchor}
          action={action}
          id={id}
        >
          <Alert sx={{ width: "100%" }} severity={alert}>
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  }

  return (
    <div className={"module message " + className} {...props}>
      <Snackbar
        {...snackBarProps}
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        message={message}
        anchorOrigin={anchor}
        action={action}
        id={id}
      />
    </div>
  );
}
