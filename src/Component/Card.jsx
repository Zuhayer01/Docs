import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import { motion } from "framer-motion"
function Card({ data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference}   whileDrag={{
    scale: 1.14,
    transition: { duration: 0.2 },
  }} className="w-[260px] rounded-[45px] h-80 bg-zinc-900 py-10 px-8 relative overflow-hidden">
        <FaRegFileAlt color="white" />
        <p className="text-white mt-5 ">{data.desc}</p>
        <div id="footer" className="w-full  px-0 absolute bottom-0 left-0">
          <div className="flex items-center justify-between w-full px-8 mb-6">
            <h1 className="font-normal text-white">{data.fileSize}</h1>
            <div className="w-6 rounded-full h-6 flex items-center justify-center bg-zinc-800 ">
              {data.close ? (
                <IoIosCloseCircleOutline color="white" size="1.9em" />
              ) : (
                <TbDownload color="white" size=".8em" />
              )}
            </div>
          </div>
          {data.tag.isOpen && (
            <div className={`flex items-center ${data.tag.color === "blue" ? "bg-blue-500" : "bg-green-500"} justify-center w-full px-8 py-4 font-extrabold`}>
              <h2>{data.tag.title}</h2>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
