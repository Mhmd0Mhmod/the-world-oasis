import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteBooking} from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const {mutate : removeBooking , isPending : isDeleting }=useMutation({
    mutationFn : (id)=>deleteBooking(id),
    onSuccess:()=>{
      toast.success("Booking deleted");
      queryClient.invalidateQueries(["bookings"]);
    }
    ,onError:()=>{
      toast.error("Booking could not be deleted ");
  }});

  return { removeBooking, isDeleting };
}