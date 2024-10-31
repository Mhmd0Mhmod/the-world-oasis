import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
    const [searchParam, setSearchParam] = useSearchParams();

    const sortBy = searchParam.get("sortBy") || "";
    function handleChange(event) {
        searchParam.set("sortBy", event.target.value);
        setSearchParam(searchParam);
    }
    return <Select options={options} onChange={handleChange} value={sortBy} type="white" />;
}
export default SortBy;
