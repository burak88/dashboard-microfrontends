import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IUserStore } from "./userStoreType";

export const useUserStore = create<IUserStore>()(
  persist(
    (set, get) => ({
      userData: { name: "John Doe", isAuthenticated: false },
      setUser: (userData) => {
        set({ userData: userData });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ userData: state.userData }),
    }
  )
);
