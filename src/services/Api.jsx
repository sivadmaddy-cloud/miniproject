import axios from "axios";

const Api = axios.create({
  baseURL: "https://695b7f5a1d8041d5eeb6f286.mockapi.io",
  headers: { 
    "Content-Type": "application/json",
  },
});

export default Api;

