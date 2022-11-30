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
import { setId } from "../store/id-slice";

const collectionRef = collection(database, "users");

export const addData = (user) => {
  try {
    addDoc(collectionRef, user).then((res) => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
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
      const fid = res.docs[0].id;
      dispatch(setId(fid));
      dispatch(changeAddress(data.personal.address));
      dispatch(changeName(data.personal.name));
      dispatch(changeGender(data.personal.gender));
      dispatch(changeDob(data.personal.dob));
    });
  }, [dispatch]);
};

export const updateData = (user, id) => {
  try {
    const docToUpdate = doc(database, "users", id);
    updateDoc(docToUpdate, user).then((res) => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      alert("data updated");
    });
  } catch (err) {
    alert(err.message);
  }
};

export const uploadPhoto = () => {};
