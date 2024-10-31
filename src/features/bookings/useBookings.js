import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constanse";

function useBookings() {
  const queryClient = useQueryClient();
  const [searchParam] = useSearchParams();

  const filterValue = searchParam.get("status") || "";
  //Filter
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  //Sort
  const sortByRaw = searchParam.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagenation
  const page = !searchParam.get("page") ? 1 : Number(searchParam.get("page"));

  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const pageCont = Math.ceil(count / PAGE_SIZE);
  if (page < pageCont)
    // PRE-Fetching
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    // PRE-Fetching
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  return { bookings, count, isLoading, error };
}
export default useBookings;
