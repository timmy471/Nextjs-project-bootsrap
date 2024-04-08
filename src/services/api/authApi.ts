import axios from "axios";

export const registerApi = async (payload: any) => {
  const { data } = await axios.post("registerUrl", payload);
  return data;
};
