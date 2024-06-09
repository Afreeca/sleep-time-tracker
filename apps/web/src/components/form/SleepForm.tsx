import { getToday } from "@/utils/helper";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  gender: "male" | "female" | "other";
  duration: number;
  date: string;
};

type SleepFormProps = {
  onSubmit: SubmitHandler<FormValues>;
};

const today = getToday();
const SleepForm = ({ onSubmit }: SleepFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<FormValues>();

  const durationValue = watch("duration");

  useEffect(() => {
    if (durationValue !== undefined) {
      const duration = Number(durationValue);
      if (isNaN(duration)) {
        setError("duration", {
          type: "manual",
          message: "Duration must be a number",
        });
      } else {
        clearErrors("duration");
      }
    }
  }, [durationValue, setError, clearErrors]);

  return (
    <div className="flex flex-1 items-center text-white">
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
          <label htmlFor="duration">Sleep Time Duration:</label>
          <input
            type="text"
            id="duration"
            {...register("duration", {
              required: true,
              pattern: /^[0-9]+(\.[0-9]+)?$/,
            })}
            className="block w-full p-2 border rounded-md text-black"
          />
          {errors.duration && (
            <span>{errors.duration.message || "This field is required"}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            {...register("date", { required: true })}
            className="block w-full p-2 border rounded-md text-black"
            max={today}
          />
          {errors.date && <span>This field is required</span>}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={`${
            isValid ? "bg-blue-500" : "bg-slate-300"
          } text-blue-800 py-2 px-4 rounded-md`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SleepForm;
