import { create } from "zustand";

export interface AuthState {
  isLoggedIn: boolean;
  userId: string | null;
  token: string | null;
  refreshToken: string | null;
  login: (userId: string, token: string, refreshToken: string) => void;
  logout: () => void;
}

const initializeState = () => {
  const storedToken = localStorage.getItem("token");
  const storedUserId = localStorage.getItem("userId");
  const storedRefreshToken = localStorage.getItem("refreshToken");
  console.log("authStore - Initializing state:", {
    storedToken,
    storedUserId,
    storedRefreshToken,
  });
  return {
    isLoggedIn: !!storedToken && !!storedUserId,
    userId: storedUserId || null,
    token: storedToken || null,
    refreshToken: storedRefreshToken || null,
  };
};

export const useAuthStore = create<AuthState>((set) => ({
  ...initializeState(),
  login: (userId: string, token: string, refreshToken: string) => {
    console.log("authStore - Logging in:", { userId, token, refreshToken });
    set({ isLoggedIn: true, userId, token, refreshToken });
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
  },
  logout: () => {
    console.log("authStore - Logging out");
    set({ isLoggedIn: false, userId: null, token: null, refreshToken: null });
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  },
}));
