import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-[#feda6a] body-font">
      <div className="md:flex  justify-between">
        <div className="">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl text-[#feda6a] font-bold font-patua">Movie Buzz</span>
          </a>
          <p className="mt-2 text-sm md:text-lg text-[#d4d4dc] text-center md:text-left">
            Welcome. <br />
            Millions of movies, TV shows and people to discover.<br /> Explore now.
          </p>
        </div>
        <div className="flex justify-between px-10 md:px-0 pt-10">
          <div className="md:px-24">
            <ul className="list-none mb-10 ">
              <li>
                <Link to="/" className=" hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trending" className=" hover:text-gray-200">
                  Trending
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <ul className="list-none mb-10">
              <li>
                <Link to="/movies" className=" hover:text-gray-200">
                  All Movies
                </Link>
              </li>
              <li>
                <Link to="/tv-series" className=" hover:text-gray-200">
                  TV Show
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#2b2b2c] mb-4">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className=" text-sm text-center sm:text-left">
            © 2023 Movie-buzz —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className=" ml-1"
              target="_blank"
            >
              @dev
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
