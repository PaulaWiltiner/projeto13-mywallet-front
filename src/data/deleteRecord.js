import axios from "axios";
export default async function deleteRecord(token, idRecord) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `https://projeto13mywalletback.herokuapp.com/records/${idRecord}`,
      config
    );
    return { status: true, response };
  } catch {
    return { status: false };
  }
}
