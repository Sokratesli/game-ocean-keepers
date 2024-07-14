import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Endgame = ({ points }) => {
  const [endgame, setEndgame] = useState(false)
  console.log("endgame", endgame)
  return (
    <AnimatePresence mode="wait">
        <motion.div
          key="OverviewBeforeEndgame"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center w-full h-full"
        >
          {!endgame ? (
    <OverviewBeforeEndgame points={points} setEndgame={setEndgame} />
  ): (
    <div>test</div>
  )}
    </motion.div>
</AnimatePresence>
  );
};

const OverviewBeforeEndgame = ({ points, setEndgame }) => {
  return (
    <div className="relative z-10 text-center text-white w-1/2 rounded-lg bg-slate-900 bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">All Levels Completed!</h1>
      <p className="mb-4 text-lg">You have reached: {points} Points</p>
      <p className="mb-4 text-lg">We will now proceed to the endgame. Your given score defines the starting point for the endgame. The lower your score, the more challenging your starting position will be in the endgame, and vice versa. Have fun!</p>
      <p className="mb-2 text-lg">Congratulations!</p>
      <button
        className="mt-4 bg-ocean-500 hover:bg-ocean-700 text-white text-lg font-bold py-2 px-4 rounded drop-shadow-md"
        onClick={setEndgame(true)}
      >
        To the Endgame
      </button>
    </div>
  );
};
export default Endgame;
