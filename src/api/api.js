import { database } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  changeAddress,
  changeDob,
  changeGender,
  changeName,
} from "../store/personal-slice";

const collectionRef = collection(database, "users");

export const addData = (user) => {
  try {
    addDoc(collectionRef, user).then((res) => {
      alert("data added");
    });
  } catch (err) {
    alert(err.message);
  }
};

export const useGetData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getDocs(collectionRef).then((res) => {
      const data = res.docs[0].data();
      dispatch(changeAddress(data.personal.address));
      dispatch(changeName(data.personal.name));
      dispatch(changeGender(data.personal.gender));
      dispatch(changeDob(data.personal.dob));
    });
  }, [dispatch]);
};

export const updateData = (user, fid) => {
  try {
    const docToUpdate = doc(database, "user", fid);
    updateDoc(docToUpdate, user).then((res) => {
      alert("data updated");
    });
  } catch (err) {
    alert(err.message);
  }
};
