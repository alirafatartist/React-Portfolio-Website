"use client";

import React, { useState } from "react";
import Image from "next/image";
import avatar from "../public/dev-ed-wave.png";
import avatar1 from "../public/design.png";
import avatar2 from "../public/code.png";
import avatar3 from "../public/consulting.png";
import gall1 from "../public/web1.png";
import gall2 from "../public/web2.png";
import gall3 from "../public/web3.png";
import gall4 from "../public/web4.png";
import gall5 from "../public/web5.png";
import Head from "next/head";

export default function Home() {
  const [darkMode, setDarkmode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <head>
        <title>Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="flex justify-between items-center py-10 m96 p-10">
            <h1 className="text-xl uppercase font-burtons">alirafatartist</h1>
            <ul className="flex items-center gap-3">
              <button
                className={
                  darkMode
                    ? "cursor-pointer text-2xl text-amber-400"
                    : "cursor-pointer text-2xl text-black"
                }
                onClick={() => setDarkmode(!darkMode)}
              >
                <i
                  class={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
                ></i>
              </button>
              <li className="cursor-pointer bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                <a href="">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-teal-600 capitalize font-medium text-5xl md:text-6xl">
              alirafatartist
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl text-center dark:text-white">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <ul className="flex items-center gap-16 text-3xl md:text-4xl">
              <li className="text-blue-500">
                <a href="">
                  <i class="fa-brands fa-square-twitter"></i>
                </a>
              </li>
              <li className="text-blue-800">
                <a href="">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="text-rose-600">
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <span className="flex justify-center items-center w-[inherit] h-[inherit]">
                <Image
                  src={avatar}
                  className="flex justify-center items-center"
                />
              </span>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div>
            <h3 className="text-2xl py-2 md:text-3xl">Services I offer</h3>
            <p>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for{" "}
              <span className="text-teal-600">agencies</span> consulted for{" "}
              <span className="text-teal-600">startups</span> and collaborated
              with talanted people to create digital products for both business
              and consumer use.
            </p>
            <p className="mt-5 ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            <div className="mt-10 flex items-center justify-between flex-wrap">
              <div className="flex justify-center items-center gap-4 cursor-pointer shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-[0.1rem] flex-col w-72 p-10 h-[30rem] md:w-96">
                <Image src={avatar1} className="w-20" />
                <p>Beautiful Designs</p>
                <p className="text-center">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <p className="text-teal-600">Design Tools I Use</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
                <p>Figma</p>
                <p>Indesign</p>
              </div>
              <div className="flex justify-center items-center gap-4 cursor-pointer shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-[0.1rem] flex-col w-72 p-10 h-[30rem] md:w-96">
                <Image src={avatar2} className="w-20" />
                <p>Code your dream project</p>
                <p className="text-center">
                  Do you have an idea for your next great website? Let's make it
                  a reality.
                </p>
                <p className="text-teal-600">Design Tools I Use</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
                <p>Figma</p>
                <p>Indesign</p>
              </div>
              <div className="flex justify-center items-center gap-4 cursor-pointer shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-[0.1rem] flex-col w-72 p-10 h-[30rem] md:w-96">
                <Image src={avatar3} className="w-20" />
                <p>Consulting</p>
                <p className="text-center">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <p className="text-teal-600">Design Tools I Use</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
                <p>Figma</p>
                <p>Indesign</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div>
            <h3 className="text-2xl py-2 md:text-3xl">Portofolio</h3>
            <p>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for{" "}
              <span className="text-teal-600">agencies</span> consulted for
              <span className="text-teal-600">startups</span> and collaborated
              with talanted people to create digital products for both business
              and consumer use.
            </p>
            <p className="mt-5">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="mt-10 flex justify-between gap-2 flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={gall1} className="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={gall2} className="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={gall3} className="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={gall4} className="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={gall5} className="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
