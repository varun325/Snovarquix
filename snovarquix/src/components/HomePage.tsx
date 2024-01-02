import { useSelector } from "react-redux";
import { RootState } from "../types";

export default function HomePage() {
  const profile = useSelector((state: RootState) => state.profile);
  const { username, email, exp } = profile;
  return (
    <>
      <h1>Home page component</h1>
      <div>Inside the home page</div>
      <p>{username}</p>
      <p>{email}</p>
      <p>{exp}</p>
    </>
  );
}
