import { atom, useRecoilState } from "recoil";

export const isScrollFin = atom<boolean>({
  key: "isScrollFin",
  default: false,
});
