import React from "react";

function UserCard({ user }: any) {
  const initials = user.name
    .split(" ")
    .map((n: string) => n[0])
    .join("");

  return (
    <div className="p-8 h-full flex flex-col relative">
      <div className="flex flex-col items-center text-center mb-8">
        <div
          className="w-30 h-30 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 
          flex items-center justify-center text-white text-5xl mb-6 shadow-lg 
          transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
        >
          {initials}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">
          {user.name}
        </h2>
        <p className="text-gray-500 font-medium">{user.email}</p>
        <span
          className="inline-block bg-gradient-to-br from-indigo-500 to-purple-600 text-white 
          px-4 py-2 rounded-full text-sm font-semibold mt-4 uppercase tracking-wider"
        >
          {user.role}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 my-8">
        <div
          className="text-center p-4 bg-indigo-100 rounded-xl transition-all duration-300 
          hover:bg-indigo-200 hover:-translate-y-0.5"
        >
          <div className="text-indigo-500 text-xl font-bold mb-1">
            {user.stats.projects}
          </div>
          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Projects
          </div>
        </div>
        <div
          className="text-center p-4 bg-indigo-100 rounded-xl transition-all duration-300 
          hover:bg-indigo-200 hover:-translate-y-0.5"
        >
          <div className="text-indigo-500 text-xl font-bold mb-1">
            {user.stats.tasks}
          </div>
          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Tasks
          </div>
        </div>
        <div
          className="text-center p-4 bg-indigo-100 rounded-xl transition-all duration-300 
          hover:bg-indigo-200 hover:-translate-y-0.5"
        >
          <div className="text-indigo-500 text-xl font-bold mb-1">
            {user.stats.completed}
          </div>
          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Completed
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
