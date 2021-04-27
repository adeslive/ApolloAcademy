"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokens = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createTokens = (user, secret) => {
    const createSignedToken = jsonwebtoken_1.default.sign({ user: { 'user': user.id }, }, secret, { expiresIn: "20m" });
    const createRefreshToken = jsonwebtoken_1.default.sign({ user: { 'user': user.id } }, secret, { expiresIn: "7d" });
    return Promise.all([createSignedToken, createRefreshToken]);
};
exports.createTokens = createTokens;
