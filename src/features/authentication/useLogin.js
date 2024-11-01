import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as signInWithPassword } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      signInWithPassword({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (error) => {
      console.error("ERROR : " + error);
      toast.error("Provided Email or Password is incorrect");
    },
  });
  return { login, isLoading };
}
