import axios from "axios";
export default async function signIn(form) {
  try {
    const response = await axios.post(
      "https://projeto13mywalletback.herokuapp.com/sign-in",
      form
    );
    return { status: true, response };
  } catch {
    return { status: false };
  }
}
