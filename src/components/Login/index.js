import { Button } from "antd";

import React from "react";

function Login() {
  return (
    <Button
      type="primary"
      size="large"
      style={{
        color: "antiquewhite",
        backgroundColor: "black",
        border: "none",
        borderRadius: ".25em",
      }}
    >
      Login
    </Button>
  );
}

export default Login;
