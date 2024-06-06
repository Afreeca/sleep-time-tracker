import Modal from "../modal/Modal";

const EmptyContentModal = ({
  title,
  onClose,
  message,
  buttonText,
  onRedirect,
}) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900" id="modal-title">
          {title}
        </h3>
        <div className="mt-2">
          <p className="text-gray-500">{message}</p>
        </div>
        {buttonText && (
          <div className="mt-4">
            <button
              onClick={onRedirect}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default EmptyContentModal;
