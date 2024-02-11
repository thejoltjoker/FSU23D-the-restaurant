import axios from "axios";


const get = async <T>(url: string) => {
  return await axios.get<T>(url);
}

export default get
