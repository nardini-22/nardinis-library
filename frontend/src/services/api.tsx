import axios from "axios";

export const api = axios.create({
  baseURL: "https://nardinis-library.herokuapp.com",
});
