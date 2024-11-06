import { useState } from 'react';
import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts';
import { GRAPH_COLORS } from '../../../../constants/Follower/currentConst';
import CustomLabel from './CustomLabel';
import CustomToolTip from './CustomToolTip';

interface SuccessRateProps {
  nickname: string;
  profileImg: string;
  successRate: number;
}

const SuccessRate = ({
  nickname,
  profileImg,
  successRate,
}: SuccessRateProps) => {
  const chartData = [
    { name: nickname, value: successRate + 10, successRate: successRate },
  ];
  const isGraphActive = successRate > 0;
  const endAngle = 90 - (360 * chartData[0].successRate) / 100;

  const [isTooltipActive, setIsTooltipActive] = useState(false);

  const formatTooltip = (successRate: number) => {
    return `${successRate}%`;
  };

  const handleHoverGraph = () => setIsTooltipActive(true);
  const handleLeaveGraph = () => setIsTooltipActive(false);

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

      {isGraphActive && (
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
          onMouseEnter={handleHoverGraph}
          onMouseLeave={handleLeaveGraph}
        >
          <Cell key="success" fill={GRAPH_COLORS[0]} />
        </Pie>
      )}

      {isTooltipActive && (
        <Tooltip
          separator=""
          formatter={formatTooltip}
          content={<CustomToolTip />}
        />
      )}
    </PieChart>
  );
};

export default SuccessRate;
