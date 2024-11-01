import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutAPI } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
function useLogout() {
  const navigate = useNavigate();
  const querClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: function () {
      navigate("/login", { replace: true });
      querClient.removeQueries();
    },
  });
  return { logout, isLoading: isPending };
}
export default useLogout;
