import { useEffect, useState } from "react";

// Fetches data to an APi endpoint to get a list of x difficulties
export const useFetchHighScores = (difficulty, num_results) => {
  const [state, setState] = useState({ data: null, loading: true });
  console.log(`in fetch: difficulty: ${difficulty}`)
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch("http://localhost:3000/getDifficultyHighScores", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        num_results: num_results,
        difficulty: difficulty,
      }),
    })
    .then((res) => res.json())
    .then((ret) => {
      console.log(ret)
      setState({data: ret, loading: false})
    });
  }, [difficulty, num_results, setState]);
  return [state.data, state.loading]
};
