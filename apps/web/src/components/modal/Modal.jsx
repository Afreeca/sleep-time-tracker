const Modal = ({
  isOpen,
  onClose,
  closeX,
  primaryButtonText,
  secondaryButtonText,
  children,
}) => {
  if (!isOpen) return null;

  const hasPrimaryButton = !!primaryButtonText;
  const hasSecondaryButton = !!secondaryButtonText;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center h-full  w-auto sm:w-full`}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden">
        <div className="flex justify-end p-2">
          {closeX && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
          )}
        </div>
        <div className="px-4 py-2">{children}</div>
        {(hasPrimaryButton || hasSecondaryButton) && (
          <div className="flex justify-end p-4 space-x-2">
            {hasSecondaryButton && (
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                {secondaryButtonText}
              </button>
            )}
            {hasPrimaryButton && (
              <button
                onClick={primaryButtonText}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {primaryButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
