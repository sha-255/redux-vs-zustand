"use client";
import ReduxTodos from "@/components/redux-todos";
import RtkTodos from "@/components/rtk-todos";
import ZustandTodos from "@/components/zustand-todos";
import { increment } from "@/lib/features/counter/redux.counter-slice";
import { useAppDispatch } from "@/lib/redux.hooks";
import { RootState } from "@/lib/redux.store";
import { useCounterZustand } from "@/lib/zustand.counter-store";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const reduxCounter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  // const zustandCounter = useCounterZustand((state) => state.value);
  const { value: countZustand, increment: incrementZustand } =
    useCounterZustand();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="text-lg font-semibold">Counters:</span>
      <div className="flex flex-col justify-center items-center">
        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          onClick={() => setCounter(counter + 1)}
        >
          UseState
        </button>
        <span className="text-lg">{counter}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          onClick={() => dispatch(increment())}
        >
          Redux
        </button>
        <span className="text-lg">{reduxCounter}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          onClick={() => incrementZustand()}
        >
          Zustand
        </button>
        <span className="text-lg">{countZustand}</span>
      </div>
      <RtkTodos />
      <ReduxTodos />
      <ZustandTodos />
    </div>
  );
}
