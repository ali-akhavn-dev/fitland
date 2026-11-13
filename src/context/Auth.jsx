import { createContext, useEffect, useState } from "react";

import { toast } from "sonner";

import * as AuthService from "@/features/auth/services/auth.service";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const initAuth = async () => {
    setIsLoading(true);
    try {
      const res = await AuthService.getMe();
      setUser(res.data.user);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const logout = async () => {
    try {
      await AuthService.logout();
    } catch (err) {
      toast.error(err.data.message || "خطا در خروج از حساب‌کاربری");
    }
  };

  const refreshUser = () => initAuth();

  const value = {
    user,
    logout,
    isLoading,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
