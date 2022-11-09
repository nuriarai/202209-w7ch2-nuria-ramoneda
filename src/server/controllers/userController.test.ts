import { mockOneUser } from "../mocks/mockUsers";
import User from "../../database/models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import environtment from "../../loadEnvirontment.js";
import { loginUser } from "./userControllers";
import type { NextFunction, Request, Response } from "express";

const token = jwt.sign({}, environtment.jwtSecret);

describe("Given a userLogin controller", () => {
  describe("When it receives a correct user name and password ", () => {
    test("Then it should invoke method status with 200 code", async () => {
      const userData = mockOneUser;
      const expectedStatus = 200;

      User.findOne = jest.fn().mockResolvedValueOnce(userData);
      bcrypt.compare = jest.fn().mockResolvedValueOnce(true);
      jwt.sign = jest.fn().mockReturnValueOnce(token);

      const req: Partial<Request> = {
        body: userData,
      };

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      await loginUser(req as Request, res as Response, next as NextFunction);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
