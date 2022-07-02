import axios from "axios";
export default async function signUp(form) {
  try {
    await axios.post(
      "https://projeto13mywalletback.herokuapp.com/sign-up",
      form
    );
    return true;
  } catch {
    return false;
  }
}
