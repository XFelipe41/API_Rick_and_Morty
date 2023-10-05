"use client";
import React, { useEffect, useState } from "react";
import Titulo from "./titulo";

const HomePage = () => {
  const [Data, setData] = useState([]);
  // console.log(Data);
  useEffect(() => {
    const getData = async () => {
      const dataRes = await fetch("https://rickandmortyapi.com/api/character");

      const data = await dataRes.json();
      setData(data.results);
    };
    getData();
  }, []);
  return (
    <>
      <Titulo />

      <div className="grid grid-cols-1 mt-8 p-4 md:grid-cols-3 gap-4">
        {Data.map((pj, key) => (
          <div
            key={pj.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center"
          >
            <a href="#">
              <img className="rounded-t-lg" src={pj.image} alt />
            </a>
            <div className="p-5 text-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {pj.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {pj.status}
              </p>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
