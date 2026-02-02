import * as z from "zod"
export const RegisterRequest = z.object({
    email: z.string().min(1, {
        message: "email khong duoc de trong"
    })
    .pipe(
        z.email({
            message: "Email khong dung dinh dang"
        })
    ),
    password: z.string().min(6, {
        message: "mat khau khong du"
    }),
    fullName: z.string().min(1, {
        message: "khong duoc de trong"
    })
})
export const loginRequest = z.object({
    email: z.string().min(1, {
        message: "email khong duoc de trong"
    })
    .pipe(
        z.email({
            message: "Email khong dung dinh dang"
        })
    ),
    password: z.string().min(6, {
        message: "mat khau khong du"
    })
})