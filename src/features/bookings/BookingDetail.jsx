import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import {useMoveBack} from "../../hooks/useMoveBack";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import {useNavigate} from "react-router-dom";
import Menus from "../../ui/Menus.jsx";
import {HiArrowUpOnSquare, HiTrash} from "react-icons/hi2";
import useCheckout from "../check-in-out/useCheckout.jsx";
import {useDeleteBooking} from "./useDeleteBooking.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";

const HeadingGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;

function BookingDetail() {
  const {booking, isLoading} = useBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  const {removeBooking, isDeleting} = useDeleteBooking();
  const {checkout, isLoading: isCheckingOut} = useCheckout();

  if (isLoading) return <Spinner/>;
  const {status, id: bookingId} = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking}/>

      <Modal>
        <ButtonGroup>
          {status === "checked-in" && (
            <Button
              icon={<HiArrowUpOnSquare/>}
              disabled={isCheckingOut}
              onClick={() =>
                checkout({id: bookingId})
              }
            >
              Check out
            </Button>
          )}
          {status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
              Check in
            </Button>
          )}
          <Modal.Open opens={"deleteBooking"}>
            <Button
              icon={<HiTrash/>}
              variation="danger"
            >
              Delete Booking
            </Button>
          </Modal.Open>
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
        <Modal.Window name={"deleteBooking"}>
          <ConfirmDelete disabled={isDeleting} resourceName={"Booking"} onConfirm={() => {
            removeBooking(bookingId, {
              onSettled: () => navigate(-1)
            });

          }}/>
        </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
