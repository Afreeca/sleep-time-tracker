"use client";

import { fetchUserSleepRecords } from "@/lib/features/sleepRecord/sleepRecordAPI";
import { selectUserSleepRecord } from "@/lib/features/sleepRecord/sleepRecordSlice";
import { SleepRecord } from "@/lib/features/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import SleepChart from "./SleepChart";

type Props = {
  selectedRecord: SleepRecord;
};

const UserSleepAnalysis = ({ selectedRecord }: Props) => {
  const dispatch = useAppDispatch();
  const userRecords = useAppSelector(selectUserSleepRecord);

  useEffect(() => {
    dispatch(fetchUserSleepRecords(selectedRecord.name));
  }, [dispatch, selectedRecord.name]);

  return (
    <div className="flex justify-start mt-2">
      {userRecords && <SleepChart records={userRecords} />}
    </div>
  );
};

const arePropsEqual = (oldProps: Props, newProps: Props) => {
  return oldProps.selectedRecord.name === newProps.selectedRecord.name;
};

const MemoizedUserSleepAnalysis = React.memo(UserSleepAnalysis, arePropsEqual);
export default MemoizedUserSleepAnalysis;
