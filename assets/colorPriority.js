const priorities = {
  high: "bg-indigo-500",
  medium: "bg-yellow-500",
  low: "bg-teal-400",
};

const colorPriority = (priority) => {
  return priorities[priority];
};

export default colorPriority;
