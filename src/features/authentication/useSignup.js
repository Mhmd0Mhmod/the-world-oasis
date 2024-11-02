import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success(
        "Account successfully created ! Please verify the new account from the user's email Address."
      );
    },
  });
  return { signup, isPending };
}
export { useSignup };
