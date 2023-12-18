import { deleteInvoiceThunk } from "../../services/InvoiceSlice/InvoiceSlice";
import { Button, Loader } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";

export default function ModalDelete({ isOpen, setIsOpen, title, id, body }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.invoice);

  const handleDelete = () => {
    dispatch(deleteInvoiceThunk(id));
  };

  console.log(isLoading);
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      footer={false}
    >
      <span className="font-spartan color-ink text-lg">{body}</span>
      <div className="mt-4 flex justify-end">
        <Button
          onClick={() => setIsOpen(false)}
          className="edit-button px-6 py-4 rounded-full font-spartan mr-3 text-base"
        >
          Cancel
        </Button>
        <Button
          className="delete-button px-7 py-4 rounded-full font-spartan text-base text-white mr-3"
          onClick={handleDelete}
        >
          {isLoading ? <Loader /> : "Delete"}
        </Button>
      </div>
    </Modal>
  );
}
