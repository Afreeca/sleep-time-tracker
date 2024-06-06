"use client";

import SleepForm from "@/components/form/SleepForm";
import Message from "@/components/messages";
import { createSleepRecord } from "@/lib/features/sleepRecord/sleepRecordAPI";
import { selectSleepRecord } from "@/lib/features/sleepRecord/sleepRecordSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const { error, successMessage } = useAppSelector(selectSleepRecord);
  const handleFormSubmit = (data: any) => {
    dispatch(createSleepRecord({ ...data, duration: Number(data.duration) }));
  };

  const message = error || successMessage;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {message && (
        <Message message={message} type={error ? "error" : "success"} />
      )}
      <SleepForm onSubmit={handleFormSubmit} />
    </div>
  );
}
