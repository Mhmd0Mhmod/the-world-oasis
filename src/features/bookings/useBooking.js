import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
  const { id } = useParams();

  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBooking(id),
    retry: false,
  });
  return { booking, isLoading, error };
}
export default useBooking;
