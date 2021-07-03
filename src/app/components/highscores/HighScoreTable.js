import React from "react";

export const HighScoreTable = ({ data }) => {
  return (
    <>
      <table className={`table text-white space-y-6 text-sm m-5 w-1/2 mx-auto`}>
        <thead className={`bg-simple-gray-1e`}>
          <tr className={`text-left border-b-2 border-gray-500`}>
            <th className={`text-left bg-simple-gray-1e p-5`}>User</th>
            <th className={`text-left bg-simple-gray-1e p-5`}>Score</th>
            <th className={`text-left bg-simple-gray-1e p-5`}>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={index}>
              <td className={`text-left bg-simple-gray-41 p-5`}></td>
              <td className={`text-left bg-simple-gray-41 p-5`}>Hey</td>
              <td className={`text-left bg-simple-gray-41 p-5`}>Hey</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
