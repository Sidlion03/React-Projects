import { deleteDoc, doc } from "firebase/firestore";
import { FaCircleUser } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import useDisclose from "../hooks/useDisclose";
const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2"
      >
        <div className="flex gap-1">
          <FaCircleUser className="self-center text-3xl text-orange" />
          <div className="pl-2 text-left">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.PhoneNo}</p>
            <p className="text-xs">{contact.Email}</p>
          </div>
        </div>
        <div className="flex text-2xl">
          <MdEdit onClick={onOpen} className="cursor-pointer" />
          <MdDelete
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate={true}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
