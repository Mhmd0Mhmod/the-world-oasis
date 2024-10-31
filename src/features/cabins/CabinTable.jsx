import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "/src/ui/Spinner.jsx";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;
function CabinTable() {
  const { cabins, isLoading } = useCabins();
  const [searchParam] = useSearchParams();
  if (isLoading) return <Spinner />;
  const search = searchParam.get("discount");
  const sortBy = searchParam.get("sortBy");
  if (!cabins.length) return <Empty resource={"cabins"} />;

  let filteredCabins;
  switch (search) {
    case "no-discount":
      filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
      break;
    case "with-discount":
      filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
      break;
    default:
      filteredCabins = cabins;
      break;
  }
  switch (sortBy) {
    case "name-desc":
      filteredCabins = filteredCabins.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      break;
    case "maxCapacity-asc":
      filteredCabins = filteredCabins.sort(
        (a, b) => a.maxCapacity - b.maxCapacity
      );
      break;
    case "maxCapacity-desc":
      filteredCabins = filteredCabins.sort(
        (a, b) => b.maxCapacity - a.maxCapacity
      );
      break;
    case "regularPrice-asc":
      filteredCabins = filteredCabins.sort(
        (a, b) => a.regularPrice - b.regularPrice
      );
      break;
    case "regularPrice-desc":
      filteredCabins = filteredCabins.sort(
        (a, b) => b.regularPrice - a.regularPrice
      );
      break;
    default:
      filteredCabins = filteredCabins.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          data={filteredCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}
export default CabinTable;
