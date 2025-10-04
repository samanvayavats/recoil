import { atom, selector } from "recoil";

export const counterAtom = atom({
    key: "counterAtom",
    default: 0
})

export const decrementAtom = atom({
    key: "decrementAtom",
    default: 0
})

// lets take the look on the selector

export const countSelector = selector({
    key: "countSelector",
    get: ({ get }) => {
        const counter = get(counterAtom);    // get the value of counterAtom
        const decrement = get(decrementAtom); // get the value of decrementAtom
        return counter + decrement;
    }
})