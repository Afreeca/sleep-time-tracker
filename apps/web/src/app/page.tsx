"use client";

import SleepForm from "@/components/SleepForm";

export default function Home() {
  const handleFormSubmit = (data: any) => {
    console.log("data: ", data);
  };
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <SleepForm onSubmit={handleFormSubmit} />
    </div>
  );
}
