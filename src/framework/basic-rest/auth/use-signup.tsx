import { useUI } from "@contexts/ui.context";
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import axios from "axios";

export interface SignUpInputType {
  email: string;
  password: string;
  lastName: string;
  permission: string;
}
async function signUp(input: SignUpInputType) {
  input.permission = "USER";
  return axios
    .post("http://20.212.156.55:3020/user/create", input)
    .then(res => res.data);
}
export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: data => {
      Cookies.set("auth_token", data.token);
      authorize();
      closeModal();
    },
    onError: data => {
      console.log(data, "login error response");
    }
  });
};
