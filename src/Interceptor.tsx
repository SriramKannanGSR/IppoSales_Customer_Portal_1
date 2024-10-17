import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "./store/userStore";
import { toast } from "react-hot-toast";

const Interceptor = () => {
  const { logout, getToken } = useUser();
  const navigate = useNavigate();

  axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${getToken()}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let res = error.response;
      if (res?.status === 401 && res.config && !res.config.__isRetryRequest) {
        logout();
        navigate("/auth");
      }

      if (error.message !== undefined && error.message === "Network Error") {
        toast.error("Check your network!");
      }

      return Promise.reject(error);
    }
  );
  return null;
};

export default Interceptor;
