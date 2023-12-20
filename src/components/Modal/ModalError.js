import { Modal } from "antd";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function ModalError({
  children,
  setIsModalVisible,
  buttonChildren,
  ...props
}) {
  return (
    <Modal {...props}>
      <p className="font-spartan text-lg mt-2">{children}</p>
      <div className=" flex justify-end w-full">
        {buttonChildren ? (
          <Link to={"/login"}>
            <Button
              className="bg-ink px-4 py-2 text-white text-base rounded-full"
              onClick={() => setIsModalVisible(false)}
            >
              Login
            </Button>
          </Link>
        ) : (
          <button
            className="mt-2 px-8 py-2 bg-ink text-white rounded-md text-base"
            onClick={() => setIsModalVisible(false)}
          >
            Ok
          </button>
        )}
      </div>
    </Modal>
  );
}
