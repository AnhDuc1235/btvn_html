import * as z from "zod";
export declare const RegisterRequest: z.ZodObject<{
    email: z.ZodPipe<z.ZodString, z.ZodEmail>;
    password: z.ZodString;
    fullName: z.ZodString;
}, z.core.$strip>;
export declare const loginRequest: z.ZodObject<{
    email: z.ZodPipe<z.ZodString, z.ZodEmail>;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=auth.schema.d.ts.map