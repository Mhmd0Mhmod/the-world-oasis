import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updatesettingAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: updating } = useMutation({
    mutationFn: updatesettingAPI,
    onSuccess: () => {
      toast.success("Settings Update Successfully");
      queryClient.invalidateQueries(["settings"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateSetting, updating };
}
