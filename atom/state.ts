import { atom, selector } from "recoil";

export const asyncQuery = selector({
  key: "selector",
  get: async ({ get }) => {
    const data = await new Promise((res) => setTimeout(() => res(1), 2000));
    return data;
  },
});
