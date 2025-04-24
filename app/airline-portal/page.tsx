"use client";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import React, { useState } from "react";

export default function page() {
  const [code, setCode ] = useState("");
  const [password, setPasssword] = useState()
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] py-8">
        {/* <main className=" py-4"> */}
        <form
          action=""
          className="bg-white w-[35%] mx-auto p-4 rounded   border-[#0EA5E9]/10 border"
        >
          <h2 className="text-center text-2xl font-semibold my-4">
            Airline Admin Portal
          </h2>
          <div className="w-[90%] mx-auto">
            <p className="text-sm font-semibold mb-1">Airline Code</p>
            <input
              type="text"
              placeholder="e.g AA, DL, UA"
              className="mx-auto h-10 rounded-lg w-full focus:outline-none border border-[#0EA5E9]/10 bg-[#F8FAFC] px-2"
            />
          </div>
          <div className="w-[90%] mt-6 mx-auto">
            <p className="text-sm font-semibold mb-1">Password</p>
            <input
              type="password"
              placeholder="Enter password"
              className="mx-auto h-10 rounded-lg w-full focus:outline-none border border-[#0EA5E9]/10 bg-[#F8FAFC] px-2"
            />
          </div>

          <button className="bg-[#0EA5E9] w-[90%] mx-auto h-9 block text-white rounded my-8">
            Login
          </button>
        </form>
        {/* </main> */}
      </div>
    </>
  );
}
