import axios from "axios";
import apis from "./apis";

const ajax = axios.create({
  baseURL: apis.baseURL,
});

//　在这里还会去做一些全局的拦截器
export const getTodos = () => {
  return ajax.get(apis.todos);
};
