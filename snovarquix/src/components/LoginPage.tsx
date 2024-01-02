import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import handleSignIn from "../loginUtils/signin";
import { useNavigate } from "react-router-dom";
import handleSignUp from "../loginUtils/signup";
import { useDispatch } from "react-redux";
import { setProfile } from "../store/reducers/profile";

export default function LoginPage() {
  const dispatch = useDispatch();
  const setUserData = (username: string, email: string, exp: string) => {
    dispatch(setProfile({ username: username, email: email, exp: exp }));
  };
  const [signUp, setSignUp] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (signUp) {
      handleSignUp(event, navigate);
    } else {
      handleSignIn(event, navigate, setUserData);
    }
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {signUp ? (
          <SignUp handleSubmit={handleSubmit} setSignUp={setSignUp}></SignUp>
        ) : (
          <SignIn handleSubmit={handleSubmit} setSignUp={setSignUp}></SignIn>
        )}
      </Grid>
    </Grid>
  );
}
