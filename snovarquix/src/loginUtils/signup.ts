import { NavigateFunction } from "react-router-dom";
import { ENVIRONTMENT } from "../environments/environment";
export default function handleSignUp(
  event: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction
) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const apiUrl = `${ENVIRONTMENT.auth_url}/user/register`;

  // Create the data to be sent in the request body
  const encryptedEmail = btoa(data.get("email") as string);
  const encryptedPassword = btoa(data.get("password") as string);
  const encryptedUserName = btoa(data.get("email") as string);
  const encryptedName = btoa(
    data.get("firstname") + " " + data.get("lastname")
  );
  const postData = {
    email: encryptedEmail,
    password: encryptedPassword,
    name: encryptedName,
    username: encryptedUserName,
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
}
