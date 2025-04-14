import Button from "@/components/common/Button";
import InputFelid from "@/components/common/InputFelid";

const EditProfile = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center m-2">
      <form className="flex flex-col gap-5 w-full max-w-[400px]">
        <InputFelid
          label="Full Name"
          type="text"
          name="fullname"
          placeholder="Enter your fullname"
        />

        <InputFelid
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />

        <Button
          name="Save"
          className="w-full bg-gradient-to-r from-bg to-[#6c5b50]"
        />
      </form>
    </div>
  );
};

export default EditProfile;
