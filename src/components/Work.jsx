import React from "react";
import TrucksRoad from "../assets/TrucksRoad.JPG";
import BioMountain from "../assets/BioMountain.JPG";
import CalculadoraCoordenadas from "../assets/CalculadoraCoordenadas.JPG";
import ToDoList from "../assets/ToDoList.JPG";
import WeatherApp from "../assets/WeatherApp.JPG";


const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-full text-gray-300 bg-[#0a192f] py-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/*Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Grid item*/}
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex text-center justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Application
              </span>

              <div className="pt-8 text-center">
                <a href="https://jrweather.netlify.app"   rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JuanRugna/weather-app"   rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="text-sm pt-8 text-center font-bold text-white tracking-wider">
              <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">ReactJS</span>
              <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">WeatherApi</span>
              </div>
            </div>
          </div>
          {/*Grid item 2*/}
          <div
            style={{ backgroundImage: `url(${BioMountain})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                BioMountain 📦🌿
              </span>

              <div className="pt-8 text-center">
                <a href="https://biomountain.netlify.app"   rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JuanRugna/BioMountain"   rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="text-sm pt-8 text-center font-bold text-white tracking-wider">
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">HTML</span>
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">CSS</span>
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">JavaScript</span>
                <br />
                
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 mt-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">Materialize</span>
              </div>
            </div>
          </div>
          {/*Grid item 3*/}
          <div
            style={{ backgroundImage: `url(${ToDoList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                To Do List
              </span>

              <div className="pt-8 text-center">
                <a href="https://jrtodolist.netlify.app"   rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JuanRugna/todolist"  rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="text-sm pt-8 text-center font-bold text-white tracking-wider">
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">ReactJS</span>
              </div>
            </div>
          </div>
          {/*Grid item 4*/}
          <div
            style={{ backgroundImage: `url(${CalculadoraCoordenadas})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Portal calculator
              </span>

              <div className="pt-8 text-center">
                <a href="https://netherportalcalculator.netlify.app"  rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JuanRugna/calculadora-coordenadas" rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="text-sm pt-8 text-center font-bold text-white tracking-wider">
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">ReactJS</span>
              </div>
            </div>
          </div>
          {/*Grid item 5*/}
          <div
            style={{ backgroundImage: `url(${TrucksRoad})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TrucksRoad
              </span>

              <div className="pt-8 text-center">
                <a href="https://www.figma.com/proto/F38UcTx9zNf30WfTH1iUAl/Trucks-Road?node-id=2%3A5&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A5"  rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JuanRugna/TrucksRoad"  rel="noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <br />
              <div className="text-sm pt-8 text-center font-bold text-white tracking-wider">
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">PHP</span>
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">MYSQL</span>
                <span className="inline-block ml-3 px-2 py-1 font-semibold border-2 bg-stone-700 border-stone-900 dark:border-stone-900 rounded-md">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
