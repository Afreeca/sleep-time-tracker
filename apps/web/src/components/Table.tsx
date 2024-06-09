import usePagination from "@/hooks/usePagination";
import { SleepRecord } from "@/lib/features/types";
import React from "react";

type SleepRecordsTableProps = {
  records: SleepRecord[];
  onRowClick: (record: SleepRecord) => void;
};

const SleepRecordsTable: React.FC<SleepRecordsTableProps> = ({
  records,
  onRowClick,
}) => {
  const itemsPerPage = 5;
  const totalRecords = records.length;
  const { nextPage, prevPage, totalPages, currentPage } = usePagination({
    totalItems: totalRecords,
    itemsPerPage,
  });

  const offset = (currentPage - 1) * itemsPerPage;
  const currentRecords = records.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-white">
          <thead className="bg-slate-500 text-left">
            <tr>
              <th className="py-3 px-4 border-b border-gray-200">Name</th>
              <th className="py-3 px-4 border-b border-gray-200">Gender</th>
              <th className="py-3 px-4 border-b border-gray-200">Duration</th>
              <th className="py-3 px-4 border-b border-gray-200">Date</th>
            </tr>
          </thead>
          <tbody className="bg-slate-700">
            {currentRecords.map((record: SleepRecord, index: number) => (
              <tr
                key={index}
                onClick={() => onRowClick(record)}
                className="cursor-pointer"
              >
                <td className="py-2 px-4 border-b border-gray-200">
                  {record.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {record.gender}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {record.duration}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {record.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalRecords > itemsPerPage && (
        <div className="flex justify-between mt-4">
          <span className=" text-black">
            Showing {offset + 1} to{" "}
            {Math.min(offset + itemsPerPage, totalRecords)} of {records.length}{" "}
            records
          </span>
          <div>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-3 py-1 mr-2 bg-gray-200 text-gray-700 rounded"
            >
              Prev
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SleepRecordsTable;
