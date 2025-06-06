const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    switch (status?.toLowerCase()) {
      case "done":
        return "bg-green-200 text-green-800";
      case "started":
        return "bg-yellow-200 text-yellow-800";
      case "not started":
        return "bg-red-200 text-red-800";
      default:
        return "bg-slate-200 text-slate-800";
    }
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
