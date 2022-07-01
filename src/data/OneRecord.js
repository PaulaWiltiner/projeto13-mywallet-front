import axios from "axios";
export default async function OneRecord(token, idRecord) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `http://localhost:5000/records/${idRecord}`,
      config
    );
    return { status: true, response };
  } catch {
    return { status: false };
  }
}
