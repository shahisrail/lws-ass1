/* eslint-disable no-unused-vars */
import React from 'react';
import class2Data from "/public/Class-2.json";

const Class_2 = () => {
    return (
        <div>
      <div className="max-w-[848px] mx-auto overflow-auto">
        <table className="w-full">
         
          <tbody>
          <tr className="bg-white/5">
                  <td className="p-5 text-white text-sm md:text-xl" colSpan="4">
                    Class Two
                  </td>
                </tr>
            {class2Data.map((student) => (
              <tr
                key={student.ID}
                className="border-b text-white  border-[#7ECEB529]"
              >
               
                <td className="p-5 text-sm md:text-xl">{student.ID}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={student.Photo}
                      width="32"
                      height="32"
                      alt={student.Name}
                    />
                    <span className="whitespace-nowrap text-white ">
                      {student.Name}
                    </span>
                  </div>
                </td>
                <td className="p-5 text-white  text-sm md:text-xl text-center">
                  {student.Scores}
                </td>
                <td className="p-5 text-white text-sm md:text-xl text-center">
                  {student.Percentage}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Class_2;