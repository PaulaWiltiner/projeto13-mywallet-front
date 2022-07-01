import axios from "axios";
export default async function signUp(form) {
  try {
    await axios.post("http://localhost:5000/sign-up", form);
    return true;
  } catch {
    return false;
  }
}