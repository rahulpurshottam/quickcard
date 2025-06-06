import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import Link from "next/link";

const Card = ({ card }) => {

  function formatTimestamp(timestamp) {
    if (!timestamp) return "Unknown";
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' };
  }

  const createdDateTime = formatTimestamp((card.createdAt===card.updatedAt)?card.createdAt:card.updatedAt);

  return (
    <div className="flex flex-col hover:bg-card-hover bg-[#47566a] rounded-md shadow-lg p-3 m-2">

      <div className="flex mb-3">
        <PriorityDisplay priority={card?.priority || 1} />
        <div className="ml-auto">
          <DeleteBlock id={card?._id} />
        </div>
      </div>

      <Link href={`/CardPage/${card._id}`} className="contents">
        <h4 className="mb-1 font-semibold text-lg text-white">
          {card?.title || "Untitled"}
        </h4>
        <hr className="h-px border-0 bg-page mb-2" />

        <p className="whitespace-pre-wrap text-white mb-3">
          {card?.description || "No description provided."}
        </p>

        <div className="flex-grow"></div>

        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs text-gray-300 mb-1">{createdDateTime}</p>
            <ProgressDisplay progress={card?.progress || 0} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={card?.status || "not started"} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
