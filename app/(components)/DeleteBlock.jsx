"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteCard = async () => {
    const res = await fetch(serverUrl+`/api/Cards/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon 
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteCard}
    />
  );
};

export default DeleteBlock;