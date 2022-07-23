import { FC } from "react";
import {
  ReactBurgerMenu,
  slide as Menu,
  Props as BurgerProps,
} from "react-burger-menu";
import { Link as Scroll } from "react-scroll";

const BurgerMenu: FC<BurgerProps> = (props) => {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "30px",
      height: "24px",
      right: "20px",
      top: "18px",
    },
    bmBurgerBars: {
      background: "#320046",
      height: "2px",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "36px",
      width: "36px",
      top: "20px",
      right: "20px",
    },
    bmCross: {
      background: "#320046",
      height: "36px",
      width: "2px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#F7EFFA",
      padding: "4em 1em 0",
      fontSize: "1.25em",
      font: "Noto Sans",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#320046",
      margin: "0em 1em",
    },
    bmItem: {
      display: "block",
      margin: "0.75em 0em",
    },
    bmOverlay: {
      background: "rgba(50, 0, 70, 0.5)",
    },
  };
  return (
    <Menu {...props} styles={styles}>
      <Scroll to="product" smooth={true} duration={400} offset={-100}>
        {" "}
        Product{" "}
      </Scroll>
      <Scroll to="members" smooth={true} duration={400} offset={-100}>
        {" "}
        Members{" "}
      </Scroll>
      <Scroll to="contact" smooth={true} duration={400} offset={-100}>
        {" "}
        Contacts{" "}
      </Scroll>
    </Menu>
  );
};

export default BurgerMenu;
