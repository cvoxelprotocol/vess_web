import { FC, useState, ReactNode, Children } from "react";
import { useTransition, animated } from "react-spring";

type Props = {
  children?: ReactNode;
};

const TextTransition: FC<Props> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);
  console.log(items.length);
  console.log("index: " + index);
  const trans = useTransition(index, {
    key: index,
    from: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 50 },
    config: { tension: 500, mass: 3, friction: 200 },
    delay: 200,
    onRest: () => setIndex((state) => (state + 1) % items.length),
    exitBeforeEnter: true,
  });
  return trans((styles, i) => (
    <animated.div style={styles}>{items[i]}</animated.div>
  ));
};

export default TextTransition;
