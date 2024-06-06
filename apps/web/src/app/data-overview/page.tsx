"use client";

import BackButton from "@/components/BackButton";
import SleepRecordsTable from "@/components/Table";
import Title from "@/components/Title";
import UserSleepAnalysis from "@/components/analysis/UserSleepAnalysis";
import LoadingWave from "@/components/loading";
import { fetchSleepRecords } from "@/lib/features/sleepRecord/sleepRecordAPI";
import { selectSleepRecord } from "@/lib/features/sleepRecord/sleepRecordSlice";
import { SleepRecord } from "@/lib/features/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EmptyContent from "../../components/modal/EmptyContent";

const SleepDataOverview = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedRecord, setselectedRecord] = useState<SleepRecord | undefined>(
    undefined
  );
  const { loading, records } = useAppSelector(selectSleepRecord);

  useEffect(() => {
    dispatch(fetchSleepRecords());
  }, [dispatch]);

  const handleRedirect = () => {
    router.push(`/`);
  };

  const handleOnRowClick = (data: SleepRecord) => {
    setselectedRecord(data);
  };

  if (loading || !records) {
    return <LoadingWave />;
  }

  if (!records.length) {
    return (
      <EmptyContent
        onClose={() => null}
        title="Records not available"
        message="Register at least one sleep record before you can view the analysis."
        buttonText="Go to form"
        onRedirect={handleRedirect}
      />
    );
  }

  return (
    <div className="h-full overflow-auto">
      <BackButton title="Go back" />
      <Title text="Sleep Records Analysis" />
      <div className="flex flex-col w-full md:w-4/6 justify-start">
        <SleepRecordsTable records={records} onRowClick={handleOnRowClick} />
      </div>
      {selectedRecord && !loading && (
        <UserSleepAnalysis selectedRecord={selectedRecord} />
      )}
    </div>
  );
};

export default SleepDataOverview;
