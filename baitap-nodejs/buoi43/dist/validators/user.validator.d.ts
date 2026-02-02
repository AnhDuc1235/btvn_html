import * as z from "zod";
export declare const userSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodPipe<z.ZodString, z.ZodEmail>;
    age: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
//# sourceMappingURL=user.validator.d.ts.map