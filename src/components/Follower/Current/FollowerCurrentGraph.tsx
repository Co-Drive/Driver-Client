import { Bar, BarChart, ResponsiveContainer } from 'recharts';

interface FollowerCurrentGraphProps {
  users: Array<{
    userId: number;
    nickname: string;
    problemNum: number;
  }>;
}

const FollowerCurrentGraph = ({ users }: FollowerCurrentGraphProps) => {
  const data = users.map((user) => {
    const { nickname, problemNum } = user;

    return {
      name: nickname,
      problemNum: problemNum,
    };
  });

  const filledData = Array(15)
    .fill(0)
    .map((_, index) => {
      return data[index] || { name: '', problemNum: 0 };
    });

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={{ padding: '0 24px' }}
    >
      <BarChart
        data={data.length >= 15 ? data : filledData}
        barSize={18}
        barCategoryGap={30}
        barGap={18}
      >
        <Bar
          dataKey="problemNum"
          radius={[30, 30, 0, 0]}
          fill="#59FF7E"
          isAnimationActive={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FollowerCurrentGraph;
