import ReactECharts from "echarts-for-react";

const EChart = ({ options }) => {
  return (
    <div className="w-8/12 mt-12 flex justify-center">
      <ReactECharts option={options} style={{
        height: '90vh',
        width: '90%',
      }} />
    </div>
  );
};

export default EChart;
