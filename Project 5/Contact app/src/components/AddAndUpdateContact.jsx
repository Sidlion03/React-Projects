import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "Contacts");
      await addDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "Contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  Email: contact.Email,
                  PhoneNo: contact.PhoneNo,
                }
              : {
                  name: "",
                  Email: "",
                  PhoneNo: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border border-orange p-2" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email</label>
              <Field name="Email" className="h-10 border p-2" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="PhoneNo">Phone.no</label>
              <Field name="PhoneNo" className="h-10 border p-2" />
            </div>
            <button className="self-end border bg-orange px-3 py-1.5">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
