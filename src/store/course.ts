import {create} from "zustand";
import {Formations} from "@/types/customTypes";
interface FormationState {
  courses: Formations[];
  setCourses: (courses: Formations[]) => void;
}

const useFormationStore = create<FormationState>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
}));

export default useFormationStore;

