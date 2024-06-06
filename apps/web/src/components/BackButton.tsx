import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ title }: { title: string }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      onClick={goBack}
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer"
    >
      <FaArrowLeft />
      <span>{title}</span>
    </button>
  );
};

export default BackButton;
