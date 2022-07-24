import { FC, ReactNode } from "react";
import { useSpring, config, animated } from "react-spring";

type Props = {
  className?: string;
  children?: ReactNode;
};

const BenefitCard: FC<Props> = ({ className, children }) => {
  const { opacity, y } = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
  });

  return (
    <animated.div
      style={{ y, opacity }}
      className={
        "border border-outline bg-primary/surface1/5 rounded-[32px] " +
        className
      }
    >
      {children}
    </animated.div>
  );
};

export default BenefitCard;
