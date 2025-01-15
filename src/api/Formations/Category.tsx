

import useFormationStore from "@/store/course";
import { useEffect } from "react";

export const useFetchCourse = () => {
  const { setCourses } = useFormationStore();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`${API_URL}/formations`);
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [API_URL, setCourses]);
};