import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUser = create()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null }),
      getToken: () => get().token,
    }),
    {
      name: "userStore",
    }
  )
);

export { useUser };
