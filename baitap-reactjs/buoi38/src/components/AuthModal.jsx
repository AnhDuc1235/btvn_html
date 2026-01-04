import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .email("Email không đúng định dạng"),
  password: z
    .string()
    .min(1, "Password bắt buộc phải nhập")
    .min(3, "Password phải từ 3 ký tự trở lên"),
});

export default function AuthModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);

  const handleClose = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const onsubmit = async (data) => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const ok = await response.json();
      localStorage.setItem("access_token", ok.access_token);

      const response2 = await fetch(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + ok.access_token,
          },
        }
      );
      const ok2 = await response2.json();
      localStorage.setItem("name", ok2.name)

      dispatch({
        type: "CLOSE_MODAL",
      });
      dispatch({
        type: "LOGIN",
        payload: {
          token: ok.access_token,
          name: ok2.name
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (!showModal) return null;

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={handleClose}
        ></div>
        <div className="bg-white w-[35%] h-auto z-50">

        <form
          onSubmit={handleSubmit(onsubmit)}
          className=""
        >
          <div className="flex flex-col">
            <span
              onClick={handleClose}
              className="flex justify-end pr-5 text-5xl cursor-pointer"
            >
              &times;
            </span>
            <span className="text-3xl font-bold flex justify-center">
              Login
            </span>
          </div>
          <div className="px-10 py-5 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                className="border-1 px-3 py-2 rounded-xl"
                type="email"
                placeholder="Email..."
                {...register("email")}
              />
              {errors?.email?.message && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                className="border-1 px-3 py-2 rounded-xl"
                type="password"
                placeholder="Password..."
                {...register("password")}
              />
              {errors?.password?.message && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <Button type="submit" disabled={!isValid} className="cursor-pointer">
              Login
            </Button>
            
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
