import { NavigateFunction } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "../types";
export default function handleSignIn(
  event: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
  setUserData: (username: string, email: string, exp: string) => void
) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const apiUrl = "http://localhost:8080/api/token";

  // Create the data to be sent in the request body
  const encryptedEmail = btoa(data.get("email") as string);
  const encryptedPassword = btoa(data.get("password") as string);
  const postData = {
    email: encryptedEmail,
    password: encryptedPassword,
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
      const parsedToken: DecodedToken = jwtDecode(data.token);
      const username = atob(parsedToken.username);
      const email = atob(parsedToken.email);
      setUserData(username, email, parsedToken.exp);
      navigate("/home");
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
