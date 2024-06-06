import { clearError } from "@/lib/features/sleepRecord/sleepRecordSlice";
import { useAppDispatch } from "@/lib/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type MessageProps = {
  message: string;
  type: "error" | "success";
};

const Message = ({ message, type }: MessageProps) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        dispatch(clearError());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  const handleClose = () => {
    setShow(false);
  };

  const isError = type === "error";
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-cy="messages"
          className="relative w-full"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`${
              isError
                ? "bg-red-100 border-red-500 text-red-900"
                : "bg-teal-100 border-teal-500 text-teal-900"
            } border-t-4 rounded-b px-4 py-3 shadow-md relative`}
            role="alert"
          >
            <span className="block sm:inline text-black">{message}</span>
            <button
              className="absolute top-0 right-0 mt-3 mr-3"
              onClick={handleClose}
              aria-label="Close"
            >
              <svg
                className={`fill-current h-6 w-6 ${
                  isError ? "text-red-500" : "text-teal-500"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
