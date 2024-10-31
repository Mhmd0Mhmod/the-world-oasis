import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// function AddCabin() {
//     const [isOpenModel, setIsOpenModel] = useState(false);

//     return (
//         <div>
//             <Button onClick={() => setIsOpenModel((isOpenModel) => !isOpenModel)}>
//                 Add new Cabin
//             </Button>
//             {isOpenModel && (
//                 <Modal onClose={() => setIsOpenModel(false)}>
//                     <CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
//                 </Modal>
//             )}
//         </div>
//     );
// }
function AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.Open opens="cabin-form">
                    <Button>Add New Cabin</Button>
                </Modal.Open>
                <Modal.Window name="cabin-form">
                    <CreateCabinForm />
                </Modal.Window>
            </Modal>
        </div>
    );
}
export default AddCabin;
