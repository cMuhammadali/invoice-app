import { Modal } from "antd";

export default function ModalError({ children, setIsModalVisible, ...props }) {
  return (
    <Modal {...props}>
      <p className="font-spartan text-base">{children}</p>
      <div className=" flex justify-end w-full">
        <button
          className="mt-2 px-8 py-2 bg-ink font-bold text-white rounded-md"
          onClick={() => setIsModalVisible(false)}
        >
          OK
        </button>
      </div>
    </Modal>
  );
}
