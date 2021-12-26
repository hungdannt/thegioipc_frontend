import { useUI } from "@contexts/ui.context";
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import Cookies from "js-cookie";
import Router from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}
async function logout() {
  // return http.post(API_ENDPOINTS.LOGIN, input);
  return {
    ok: true,
    message: "Logout Successful!"
  };
}
export const useLogoutMutation = () => {
  const { unauthorize } = useUI();
  return useMutation(() => logout(), {
    onSuccess: _data => {
      Cookies.remove("auth_token");
      unauthorize();
      toast("Đã đăng xuất", {
        type: "info",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      Router.push("/");
    },
    onError: data => {
      console.log(data, "logout error response");
    }
  });
};
