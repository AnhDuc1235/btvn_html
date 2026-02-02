"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return async (req, res, next) => {
        const body = await schema.safeParseAsync(req.body);
        if (!body.success) {
            return res.status(400).json({
                message: "validate failed",
                errors: body.error.issues
            });
        }
        req.body = body.data;
        next();
    };
};
exports.validate = validate;
//# sourceMappingURL=auth.middleware.js.map