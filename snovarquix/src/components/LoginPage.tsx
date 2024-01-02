import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function LoginPage() {
  const [signUp, setSignUp] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const apiUrl = "http://localhost:8080/api/token";

    // Create the data to be sent in the request body
    const postData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // Convert the data to a JSON string
    const jsonBody = JSON.stringify(postData);

    // Set the content type header
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    // Define the fetch options
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: jsonBody,
    };

    // Make the POST request using the Fetch API
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // or response.text() depending on the response content type
      })
      .then((data) => {
        navigate("/home");
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
