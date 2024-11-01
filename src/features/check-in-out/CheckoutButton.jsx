import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  console.log(bookingId);

  const { checkout, isLoading } = useCheckout();
  return (
    <Button
      variation="primary"
      sizes="small"
      onClick={() => checkout({ id: bookingId })}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
