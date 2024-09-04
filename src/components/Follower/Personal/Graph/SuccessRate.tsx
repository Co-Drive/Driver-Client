import { Cell, Label, Pie, PieChart } from 'recharts';
import { GRAPH_COLORS } from '../../../../constants/Follower/currentConst';
import CustomLabel from './CustomLabel';

interface SuccessRateProps {
  profileImg: string;
  successRate: number;
}

const SuccessRate = ({ profileImg, successRate }: SuccessRateProps) => {
  const chartData = [
    { name: 'success', value: successRate === 0 ? 10 : successRate },
  ];

  const endAngle = 90 - (360 * chartData[0].value) / 100;

  return (
    <PieChart width={154} height={154}>
      <Pie
        data={chartData}
        dataKey="value"
        stroke="none"
        startAngle={90}
        endAngle={-270}
        cornerRadius={15}
        innerRadius={68}
        outerRadius={77}
        fill={GRAPH_COLORS[1]}
      >
        <Label
          content={<CustomLabel profileImg={profileImg} />}
          position="center"
        />
      </Pie>
      <Pie
        data={chartData}
        dataKey="value"
        stroke="none"
        startAngle={90}
        endAngle={endAngle}
        cornerRadius={15}
        innerRadius={68}
        outerRadius={77}
      >
        <Cell key="success" fill={GRAPH_COLORS[0]} />
      </Pie>
    </PieChart>
  );
};

export default SuccessRate;
