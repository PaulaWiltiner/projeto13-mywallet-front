import axios from "axios";
export default async function createRecord(token, typeRecord, form) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post(
      `https://projeto13mywalletback.herokuapp.com/records?typeRecord=${typeRecord}`,
      form,
      config
    );
    return { status: true };
  } catch {
    return { status: false };
  }
}
