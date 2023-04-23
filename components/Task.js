import React from "react";
import PropTypes from "prop-types";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ImageProfile from "./ImageProfile";
import Users from "./Users";

const Task = ({ taskId, taskName, status, priority, users }) => {
  return (
    <div>
      <div className="flex flex-none flex-col p-2 mt-4 mb-4 rounded-large bg-white overflow-hidden w-64 h-40">
        <div className="flex items-center">
          <span className={`rounded-full w-2 h-2 bg-yellow-500 `}></span>
          <span className="ml-2 text-sm">{priority}</span>
        </div>
        <div className="mt-2">
          <p className="text-lg font-bold">{taskName}</p>
        </div>

        <div className=" flex mt-3 justify-between">
          <div className="flex ml-3 justify between">time</div>

          <span className="flex text-gray-800 items-center">
            <BiDotsHorizontalRounded className="w-6 h-6" />
          </span>
        </div>
      </div>
      <Users id={taskId} />
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  users: PropTypes.array,
  progress: PropTypes.number,
};
export default Task;
