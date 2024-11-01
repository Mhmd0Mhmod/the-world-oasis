import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings.js";
import toast from "react-hot-toast";

function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isLoading } = useMutation({
    mutationFn: ({ id, breakfast }) =>
      updateBooking(id, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      // data is returned from mutationFn
      toast.success(`Booking ${data.id} has been checked in`);
      queryClient.invalidateQueries({ type: "active" });
      navigate("/");
    },
    onError: (error) => {
      toast.error("An error occurred. Please try again.");
    },
  });
  return { checkin, isLoading };
}

export { useCheckin };
