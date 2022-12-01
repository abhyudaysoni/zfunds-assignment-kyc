import { database, storage } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePersonalDetails } from "../store/personal-slice";
import { setId } from "../store/id-slice";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { setPan, setPhoto, setSignature } from "../store/documents-slice";
import { setFatca } from "../store/fatca-slice";

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
      const imageRef = ref(storage, fid);
      listAll(imageRef).then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            if (url.includes("pan")) {
              dispatch(setPan(url));
            } else if (url.includes("photo")) {
              dispatch(setPhoto(url));
            } else if (url.includes("signature")) {
              dispatch(setSignature(url));
            }
          });
        });
      });
      dispatch(setId(fid));
      dispatch(changePersonalDetails(data.personal));
      dispatch(setFatca(data.fatca));
    });
  }, [dispatch]);
};

export const updateData = (user, id) => {
  try {
    const docToUpdate = doc(database, "users", id);
    updateDoc(docToUpdate, user).then((res) => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  } catch (err) {
    // alert(err.message);
  }
};
