import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col gap-10 items-center justify-center m-2">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#6C5C50]">Change Password</h1>
        <p className="text-lg">the password should have at least 6 characters.</p>
      </div>

      <form className="flex flex-col gap-7 w-full max-w-[400px]">
        <InputFelid
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
        />

        <InputFelid
          label="New Password"
          type="password"
          name="newPassword"
          placeholder="New Password"
        />

        <InputFelid
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        <Button
          name="Save"
          className="w-full bg-gradient-to-r from-bg to-[#6c5b50]"
        />
      </form>
    </div>
  );
};

export default ChangePassword;
