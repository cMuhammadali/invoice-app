import { Modal } from "antd";

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
        <button
          className="mt-2 px-8 py-2 bg-ink text-white rounded-md text-base"
          onClick={() => setIsModalVisible(false)}
        >
          {buttonChildren ? buttonChildren : "OK"}
        </button>
      </div>
    </Modal>
  );
}
