import {create} from "zustand";

interface UserStore {
  user: null | {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  setUser: (user: UserStore["user"]) => void;
  removeUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));

export default useUserStore;
