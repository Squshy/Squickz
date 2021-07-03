// Nav section for application
// using code from here https://tailwindui.com/components/application-ui/navigation/navbars
import React from "react";
import { useFetch } from "../API/APIFetch";

export const Footer = () => {
  const { data, loading } = useFetch(`http://www.numbersapi.com/random/trivia`);

  return (
    <footer className="p-5 w-full bottom-0 inset-x-0 sm:px-6 lg:px-8 bg-simple-gray-1e">
      <div className="text-xl text-center">
        Trivia API: "{loading ? "loading..." : data}"
      </div>
    </footer>
  );
};
