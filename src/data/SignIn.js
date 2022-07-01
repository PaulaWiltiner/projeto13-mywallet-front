import axios from "axios";
export default async function SignIn(form) {
  try {
    const response = await axios.post("http://localhost:5000/sign-in", form);
    return { status: true, response };
  } catch {
    return { status: false };
  }
}
