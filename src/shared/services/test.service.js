import { get } from "./http.service";

export const testFetch = async () => {
  try {
    const result = await get("auth");
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
