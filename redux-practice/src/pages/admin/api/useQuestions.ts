import { Question } from "@common-types/question";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../../firebase/firebaseConfig";
import { setQuestions } from "../questionSlice";

export const useQuestions = () => {
  const [error, setError] = useState<unknown>();

  const dispatch = useDispatch();

  const fetchQuestion = async () => {
    try {
      const querySnapshot = getDocs(collection(db, "questions"));

      const newData = (await querySnapshot).docs.map(
        (doc) => doc.data().question,
      );
      dispatch(setQuestions(newData));
    } catch (e) {
      setError(e);
    }
  };

  const addQuestion = async (question: Question, onSuccess: () => void) => {
    try {
      await addDoc(collection(db, "questions"), {
        question,
      });

      onSuccess();
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return { error, addQuestion };
};
