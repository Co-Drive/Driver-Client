import { CustomLabelProps } from '../../../../types/Week/HomeFollowerTypes';

const CustomLabel = ({ profileImg }: CustomLabelProps) => {
  return (
    <image
      href={profileImg}
      x={22}
      y={22}
      width={110}
      height={110}
      clipPath="circle(50%)"
    />
  );
};

export default CustomLabel;
