import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { toast } from "sonner";

import * as authService from "../services/auth.service";
import validateIdentifier from "../validator";
import { validateSchema } from "@/utils/helper";
import { OTP_LENGTH } from "@/constants/auth";
import { otpSchema } from "../validator/schema";

function useAuth() {
  const [isSentOtp, setIsSentOtp] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [identifierType, setIdentifierType] = useState("");
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoginPath = location.pathname.includes("login");
    const isRegisterPath = location.pathname.includes("register");
    if ((isLoginPath || isRegisterPath) && !isSentOtp) {
      navigate("/auth", { replace: true });
    }
  }, []);

  const sendOtpToUser = async () => {
    setError(false);
    const isIdentifierValid = validateIdentifier(identifier, true);
    if (!isIdentifierValid) {
      return setError(true);
    }

    setIsLoading(true);
    try {
      const { data } = await authService.sendOTP({
        identifier: identifier.trim(),
      });
      console.log(data);
      setIsSentOtp(true);
      setIdentifierType(data.type);
      navigate("/auth/login");
    } catch (err) {
      toast.error(err?.data.message || "مشکلی پیش آمده، دوباره تلاش کنید");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    let finalOTP = otp.join("").trim();
    const isOtpValid = validateSchema(otpSchema, finalOTP, true);
    if (!isOtpValid) return;

    console.log({ identifier, otp: finalOTP });
    setIsLoading(true);
    try {
      const res = await authService.verifyOTP({ identifier, otp: finalOTP });
      toast.success(res.message);
      console.log(res);
      if (res.data.isNewUser) {
        return navigate("/auth/register", { replace: true });
      }
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err.data);
      toast.error(err?.data.message || "مشکلی پیش آمده، دوباره تلاش کنید");
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      await authService.sendOTP({ identifier: identifier.trim() });
      setIsSentOtp(true);
    } catch (err) {
      toast.error(err?.data.message || "مشکلی پیش آمده، دوباره تلاش کنید");
    }
  };

  const handleLogin = () => {
    if (isSentOtp) {
      verifyOtp();
    } else {
      sendOtpToUser();
    }
  };

  const changeIdentifier = (e) => setIdentifier(e.target.value);

  const resetLogin = () => {
    setIsSentOtp(false);
    setOtp(Array(OTP_LENGTH).fill(""));
    setError(null);
  };

  const resetRegister = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
  };

  const resetIdentifier = () => {
    setIdentifier("");
  };

  return {
    isSentOtp,
    identifier,
    identifierType,
    otp,
    isLoading,
    handleLogin,
    resendOtp,
    resetLogin,
    resetRegister,
    changeIdentifier,
    setOtp,
    resetIdentifier,
    error,
  };
}

export default useAuth;
