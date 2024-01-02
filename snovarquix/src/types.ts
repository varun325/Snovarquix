import { ProfileState } from "./store/reducers/profile";
export interface RootState {
  profile: ProfileState;
  // Include other slices or reducers here
}
export interface DecodedToken {
  username: string;
  email: string;
  exp: string;
  // Add other properties based on your JWT payload
}
