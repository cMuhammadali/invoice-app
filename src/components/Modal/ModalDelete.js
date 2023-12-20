import { deleteInvoiceThunk } from "../../services/InvoiceSlice/InvoiceSlice";
import { Button, Loader, ModalError } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "antd";

export default function ModalDelete({ isOpen, setIsOpen, title, id, body }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isErrorModal, setIsErrorModal] = useState(false);
  const { isLoading, error, status } = useSelector((state) => state.invoice);

  const handleDelete = () => {
    dispatch(deleteInvoiceThunk(id));
  };

  useEffect(() => {
    if (error) {
      setIsErrorModal(true);
    } else {
      setIsErrorModal(false);
    }
    if (status === 200) {
      console.log('worked');
      console.log("status if", status);
      navigate("/");
    }
  }, [error, status]);

  console.log("status", status);
  return (
    <>
      <ModalError
        open={isErrorModal}
        setIsModalVisible={setIsErrorModal}
        title="Error"
        footer={false}
      >
        {error?.response?.data}
        <span className="text-ink ml-2">login</span>
      </ModalError>
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
    </>
  );
}
