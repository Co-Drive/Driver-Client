import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts';
import { GRAPH_COLORS } from '../../../../constants/Follower/currentConst';
import CustomLabel from './CustomLabel';
import CustomToolTip from './CustomToolTip';

interface SuccessRateProps {
  profileImg: string;
  successRate: number;
}

const SuccessRate = ({ profileImg, successRate }: SuccessRateProps) => {
  const chartData = [{ name: '', value: successRate === 0 ? 10 : successRate }];

  const endAngle = 90 - (360 * chartData[0].value) / 100;

  const formatTooltip = (value: number) => {
    return `${value}%`;
  };

  return (
    <PieChart width={154} height={154}>
      <Pie
        isAnimationActive={false}
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
        isAnimationActive={false}
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
      <Tooltip
        separator=""
        formatter={formatTooltip}
        content={<CustomToolTip />}
      />
    </PieChart>
  );
};

export default SuccessRate;
