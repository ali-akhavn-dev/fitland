import { Link } from "react-router";

import RegisterInput from "./RegisterInput";
import Checkbox from "@/components/ui/Checkbox";
import BackButton from "./BackButton";

function RegisterForm() {
  return (
    <div className="auth-form-wrapper">
      <form action="" className="space-y-8 select-none">
        <h2 className="auth-form-title">ثبت‌نام</h2>

        <div className="text-sm space-y-8">
          <RegisterInput
            name="fullName"
            label="نام و نام خانوادگی *"
            placeholer="نام خود را به فارسی وارد کنید"
          />

          <RegisterInput
            name="mobile"
            label="شماره تلفن همراه *"
            placeholer="09*********"
            rtl
          />

          <RegisterInput
            name="email"
            label="ایمیل (اختیاری)"
            type="email"
            placeholer="Example@gmail.coms"
          />
        </div>

        <button type="button" className="submit-btn">
          تایید
        </button>

        <div className="flex-ic gap-2 text-sm font-IRANSansX-Medium">
          <Checkbox name="acceptTerms" />
          <span>
            <Link to="/" className="text-secondary-300">
              قوانین و مقررات
            </Link>
            را خوانده و قبول دارم.
          </span>
        </div>
      </form>

      <BackButton to="/auth/login" />
    </div>
  );
}

export default RegisterForm;
