import { create } from "zustand";
import { Formations } from "@/types/customTypes";

// Interface pour l'état des formations
interface FormationState {
  courses: Formations[];
  groupedCourses: GroupFormations;
  setCourses: (courses: Formations[]) => void;
}

// Type pour les formations groupées par domaine
type GroupFormations = {
  [domain: string]: {
    count: number;
    image: string;
    items: Formations[];
  };
};

// Création du store avec Zustand
const useFormationStore = create<FormationState>((set) => ({
  courses: [],
  groupedCourses: {} as GroupFormations,
  setCourses: (courses: Formations[]) => {
    const groupedCourses = courses.reduce((accumulateur: GroupFormations, formation: Formations) => {
      const { domain } = formation;
      if (!accumulateur[domain]) {
        accumulateur[domain] = { count: 0, image: formation.image, items: [] };
      }
      accumulateur[domain].count += 1;
      accumulateur[domain].items.push(formation);
      return accumulateur;
    }, {} as GroupFormations);

    set({ courses, groupedCourses });
  },
}));

export default useFormationStore;
