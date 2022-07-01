import axios from "axios";
export default async function logout(token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`http://localhost:5000/logout`, config);
    return { status: true };
  } catch {
    return { status: false };
  }
}
