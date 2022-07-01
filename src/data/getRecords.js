import axios from "axios";
export default async function getRecords(token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get("http://localhost:5000/records", config);
    return { response };
  } catch {}
}
