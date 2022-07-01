import axios from "axios";
export default async function deleteRecord(token, idRecord) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `http://localhost:5000/records/${idRecord}`,
      config
    );
    return { status: true, response };
  } catch {
    return { status: false };
  }
}
