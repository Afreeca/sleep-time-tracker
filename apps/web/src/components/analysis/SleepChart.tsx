import { SleepRecord } from "@/lib/features/types";
import { EChartsOption } from "echarts";
import ReactEChartsCore from "echarts-for-react";
import { useEffect, useState } from "react";

type EchartsBarProps = {
  records: SleepRecord[];
};
const SleepChart = ({ records }: EchartsBarProps) => {
  const [chartOption, setChartOption] = useState<EChartsOption>(
    {} as EChartsOption
  );

  useEffect(() => {
    const today = new Date();
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    const filteredData = records.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= sevenDaysAgo && itemDate <= today;
    });

    // Group item by day
    const groupedData = filteredData.reduce((acc, item) => {
      const day = new Date(item.date).toLocaleDateString("en-GB", {
        weekday: "short",
      });
      acc[day] = (acc[day] || 0) + item.duration;
      return acc;
    }, {} as Record<string, number>);

    // chart options
    const xAxisData = Object.keys(groupedData);
    const seriesData = Object.values(groupedData);

    setChartOption({
      xAxis: {
        type: "category",
        data: xAxisData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: seriesData,
          type: "bar",
        },
      ],
    });
  }, [records]);

  return (
    <ReactEChartsCore
      option={chartOption}
      className="flex flex-col w-full md:w-4/6 justify-start bg-slate-200"
    />
  );
};

export default SleepChart;
