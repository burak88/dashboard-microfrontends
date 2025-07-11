import React, { useState } from "react";
import { ContentItemType } from "../types";

function ContentBar({ content }: { content: ContentItemType[] }) {
  const [view, setView] = useState<"list" | "grid">("list");
  const [selectedItem, setSelectedItem] = useState<ContentItemType | null>(
    null
  );

  return (
    <>
      <div className="p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 m-0">Content Feed</h2>
          <div className="flex bg-indigo-100 rounded-lg p-1">
            <button
              onClick={() => setView("list")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                view === "list"
                  ? "bg-indigo-500 text-white"
                  : "text-indigo-500 hover:bg-indigo-200"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setView("grid")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                view === "grid"
                  ? "bg-indigo-500 text-white"
                  : "text-indigo-500 hover:bg-indigo-200"
              }`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex-1 overflow-y-auto pr-2 ${
            view === "list"
              ? "flex flex-col gap-4"
              : "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4"
          } scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-100`}
        >
          {content.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 transition-all relative cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-indigo-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-800 m-0 leading-snug">
                  {item.title}
                </h3>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide whitespace-nowrap">
                  {item.category}
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex justify-between text-xs text-gray-400">
                <span className="font-medium">{item.date}</span>
                <span className="font-semibold text-indigo-500">
                  by {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()} // modal dışına tıklanırsa kapansın ama içeri tıklanırsa kapanmasın
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedItem.title}
            </h3>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full uppercase tracking-wider">
              {selectedItem.category}
            </span>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <div className="text-sm text-gray-400">
              <span className="block mb-1">Date: {selectedItem.date}</span>
              <span className="block font-medium text-indigo-500">
                Author: {selectedItem.author}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentBar;
