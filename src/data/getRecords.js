import axios from "axios";
export default async function getRecords(token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "https://projeto13mywalletback.herokuapp.com/records",
      config
    );
    return { response };
  } catch {}
}
