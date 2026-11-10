import { Link } from "react-router";

import LoginInput from "./LoginInput";

function LoginForm() {
  return (
    <div className="auth-form-wrapper">
      <form action="" className="select-none">
        <h2 className="auth-form-title">ورود | ثبت‌نام</h2>

        <div className="my-8">
          <label className="text-sm text-606060">
            لطفا شماره موبایل یا ایمیل خود را وارد کنید
          </label>

          <LoginInput />
        </div>

        <button type="button" className={`submit-btn`}>
          ادامه
        </button>

        <p className="lg:hidden text-[10px] text-606060 mt-8">
          ورود شما به معنای پذیرش شرایط فیت لند و
          <Link className="text-secondary-400" to="/privacy">
            قوانین حریم خصوصی
          </Link>{" "}
          ماست
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
