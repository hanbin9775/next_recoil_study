import { atom, selector } from "recoil";

export const fakeQuery = atom({
  key: "fake",
  default: 1,
});

export const selectorQuery = selector({
  key: "selector",
  get: async ({ get }) => {
    return 1;
  },
});
