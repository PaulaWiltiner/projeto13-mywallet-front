import axios from "axios";
export default async function UpdateRecord(token, type, idRecord, form) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(
      `http://localhost:5000/records/${idRecord}?typeRecord=${type}`,
      form,
      config
    );
    return { status: true, response };
  } catch {
    return { status: false };
  }
}
