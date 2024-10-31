import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryclient = useQueryClient();
  const { mutate: deleteCabin, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteCabinAPI(id),
    onSuccess: () => {
      toast.success("Cabin Deleted Sucssesfully");
      queryclient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteCabin, isDeleting };
}
