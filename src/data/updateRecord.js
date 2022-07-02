import axios from "axios";
export default async function updateRecord(token, type, idRecord, form) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(
      `https://projeto13mywalletback.herokuapp.com/records/${idRecord}?typeRecord=${type}`,
      form,
      config
    );
    return { status: true, response };
  } catch {
    return { status: false };
  }
}
