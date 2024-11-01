import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateBooking} from "../../services/apiBookings.js";
import toast from "react-hot-toast";

function UseCheckout() {
  const queryClient = useQueryClient();
  const {mutate: checkout, isPending: isLoading} = useMutation({
    mutationFn: ({id}) => updateBooking(id, {
      status: "checked-out",
    }),
    onSuccess: (data) => { // data is returned from mutationFn
      toast.success(`Booking ${data.id} has been checked out`);
      queryClient.invalidateQueries({type: "active"});
    },
    onError: (error) => {
      toast.error("An error occurred. Please try again.");
    },
  });
  return {checkout, isLoading};
}

export default UseCheckout;