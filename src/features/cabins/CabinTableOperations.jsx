import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "no-discount",
            label: "No Discount",
          },
          {
            value: "with-discount",
            label: "With Discount",
          },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By name (A-Z)" },
          { value: "name-desc", label: "Sort By name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By price (low frist)" },
          { value: "regularPrice-desc", label: "Sort By price (high frist)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity (low frist)" },
          { value: "maxCapacity-desc", label: "Sort By Capacity (high frist)" },
        ]}
      />
    </TableOperations>
  );
}
export default CabinTableOperations;
