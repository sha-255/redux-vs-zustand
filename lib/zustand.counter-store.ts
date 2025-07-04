import { create } from "zustand";

export interface CounterStateZustand {
  value: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
}

export const useCounterZustand = create<CounterStateZustand>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
  incrementByAmount: (amount) =>
    set((state) => ({ value: state.value + amount })),
}));
