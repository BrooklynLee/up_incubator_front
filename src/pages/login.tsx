import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../components/form-error";
import Btn from "../components/btn";
import { userLogin } from "../redux/usersSlice";
import { useDispatch } from "react-redux";

interface ILoginForm {
  username?: string;
  password?: string;
}

export const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>();
  // const onSubmit = () => { };
  const onSubmit = () => {
    const { username, password } = getValues();
    dispatch(
      userLogin({
        username: username,
        password,
      })
    );
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
        <h3 className="text-2xl text-gray-800">Log In</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-5 px-5"
        >
          <input
            {...register("username", {
              required: "This is required",
              // pattern: /^[A-Za-z0-9._%+-]+@gmail.com$/,
            })}
            // ref={register({ required: "username is required" })}
            name="username"
            required
            // type="username"
            placeholder="UserName"
            className="input"
          />
          {errors.username?.message && (
            <FormError errorMessage={errors.username?.message} />
          )}
          <input
            {...register("password", {
              required: "Password is required",
              // minLength: 10
            })}
            required
            name="password"
            type="password"
            placeholder="Password"
            className="input"
          />
          {errors.password?.message && (
            <FormError errorMessage={errors.password?.message} />
          )}
          {errors.password?.type === "minLength" && (
            <FormError errorMessage="Password must be more than 10 chars." />
          )}
          <button className="mt-3 btn">Log In</button>
          {/* <Btn text={"Sign In"} onClick={handleSubmit}></Btn> */}
        </form>
      </div>
    </div>
  );
};
