import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: string;
  gender: "male" | "female" | "other";
  sleepDuration: number;
}

interface SleepFormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const SleepForm = ({ onSubmit }: SleepFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-slate-700 p-4 rounded-md"
    >
      <div className="mb-4">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="block w-full p-2 border rounded-md text-black"
        />
        {errors.name && <span>This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          {...register("gender", { required: true })}
          className="block w-full p-2 border rounded-md text-black"
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span>This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="sleepDuration">Sleep Time Duration:</label>
        <input
          type="number"
          id="sleepDuration"
          {...register("sleepDuration", { required: true })}
          className="block w-full p-2 border rounded-md text-black"
        />
        {errors.sleepDuration && <span>This field is required</span>}
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className={`${
          isValid ? "bg-blue-500" : "bg-slate-300"
        } text-white py-2 px-4 rounded-md`}
      >
        Submit
      </button>
    </form>
  );
};

export default SleepForm;
