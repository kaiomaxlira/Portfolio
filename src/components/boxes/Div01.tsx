import React from 'react';

export default function Boxes() {
  return (
    <div className="relative w-500 h-screen my-[2rem] mx-[6rem] bg-slate-400 shadow-md shadow-slate-500 rounded-lg">

      <div className="absolute h-[15rem] w-[5rem] -left-[2rem] mt-[10rem]
       bg-emerald-800 shadow-md shadow-slate-500 rounded-lg">
      </div>

      <div className="absolute h-[4rem] w-[30rem] -right-[-2rem] mt-[-1rem]
       bg-emerald-800 shadow-md shadow-slate-500 rounded-lg pl-4 pt-4">
      <h1><strong>Email:</strong> kaiomax01@gmail.com / <strong>Whats:</strong> (xx) x xxxx-xxxx</h1>
      </div>

    </div>
  );
}
