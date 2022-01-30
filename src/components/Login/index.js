import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

import React from "react";

function Login() {
  const { loginWithRedirect } = useAuth0();

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
      onClick={loginWithRedirect}
    >
      Login
    </Button>
  );
}

export default Login;
