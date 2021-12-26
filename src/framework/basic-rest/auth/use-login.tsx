import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import axios from "axios";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export interface LoginInputType {
  email: string;
  password: string;
  // remember_me: boolean;
}
async function login(input: LoginInputType) {
  // return http.post("/auth/login", input).then(res => res.data);
  return axios
    .post("http://20.212.156.55:3020/auth/login", input)
    .then(res => res.data);
  // .catch(err => {
  //   console.log("error");
  //   console.log(err.status);
  //   console.log(err.response.message);
  // });
}

export const useLoginMutation = () => {
  const router = useRouter();
  const { authorize, closeModal } = useUI();
  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: data => {
      Cookies.set("auth_token", data.access_token, {
        sameSite: "None",
        secure: true
      });
      authorize();
      closeModal();
      if (router.pathname == "/signin") {
        router.push("/my-account");
      }
      toast("Đăng nhập thành công", {
        type: "success",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    },
    onError: (data: any) => {
      toast(data.response.data.message, {
        type: "error",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  });
};
