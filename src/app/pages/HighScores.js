import React, { useState } from "react";
import { HighScoreButton } from "../components/highscores/HighScoreButton";
import { HighScoreTable } from "../components/highscores/HighScoreTable";
import { Footer } from "../components/Nav/Footer";
import { DIFFICULTIES } from "../constants";
import { useFetchHighScores } from "../hooks/useFetchHighScores";

const NUM_RESULTS = 5;

export const HighScores = () => {
  const [difficulty, setDifficulty] = useState("Easy");
  console.log(DIFFICULTIES[0].difficulty)
  console.log(`Current difficulty: ${difficulty}`)
  const [hiScoreData, loading] = useFetchHighScores(difficulty, NUM_RESULTS);

  return (
    <>
      <div className={`p-5 w-full h-full`}>
        <div className={`flex flex-row justify-evenly w-full`}>
          {DIFFICULTIES.map((obj, index) => (
            <>
              <HighScoreButton
                key={index}
                text={obj.difficulty}
                onClick={() => setDifficulty(obj.difficulty)}
              />
            </>
          ))}
        </div>
        <HighScoreTable data={``} difficulty={``} />
      </div>
      <Footer />
    </>
  );
};
