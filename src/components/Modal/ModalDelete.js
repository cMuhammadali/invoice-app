import { Modal } from "antd";

export default function ModalDelete({ isOpen, setIsOpen, title, id, body }) {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      footer={false}
    >
      <span className="font-spartan color-ink">{body}</span>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => setIsOpen(false)}
          className="edit-button px-6 py-4 rounded-full font-spartan font-bold mr-3"
        >
          Cancel
        </button>
        <button className="delete-button px-7 py-4 rounded-full font-spartan font-bold text-white mr-3">
          Delete
        </button>
      </div>
    </Modal>
  );
}
