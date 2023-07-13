// @/components/DummyPage.js
import React from "react";
import Layout from "./Layout";
import Navbar from "./Layout/navbar";

export default function DummyPage({ title }) {
  return (
    <Layout pageTitle={title}>
      <Navbar />
      <div className="border">
        <div className="m-auto flex shadow-lg border border-black">
          <div className="p-10 border-b-2 border-gray-500">
            <h1 className="text-4xl border-b-2 border-gray-500 pb-5">
              Upload Video
            </h1>
            <form className="pt-5">
              <div className="pb-5">
                <label class=""> Select Your Video File</label>
                <input className="pt-5" type="file" />
              </div>
              <lable className="pt-5">
                Start time and end time denotes where in your video, you will
                like to add tha name of tha customer.
              </lable>
              <div className="pt-5 flex  justify-between">
                <div>
                  <label className>Start Time (in sec)</label>
                  <input className="border" type="time" />
                </div>
                <div>
                  <label>End Time (in sec)</label>
                  <input className="border" type="time" />
                </div>
              </div>
              <div className="flex flex-col pt-5">
                <label>Add your Name:</label>
                <input className="border w-auto h-20" type="text" />
              </div>
            </form>
            <button className="bg-blue-700 mt-5 rounded-md w-20 h-10  text-white">
              Submit
            </button>
          </div>
          <div className="p-10 border-b-2 w-1/2 border-red-500">
            <h1 className="text-4xl border-b-2 w-full border-gray-500 pb-5">
              Output
            </h1>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-4xl border-b-2 border-gray-500 pb-5">
          Video History
        </h1>

        <div className="flex justify-between border-b-2 border-black text-right">
          <div className="border">Input Video</div>
          <div className="border">Text File Link</div>
          <div className="border">output Video</div>
        </div>
      </div>
    </Layout>
  );
}
