import { RegisterOptions } from "react-hook-form";
import { Regex } from "./regexs";

export class FormRules {
  public static fullName = {
    required: {
      message: "UserName is required",
      value: true,
    },
    pattern: {
      value: Regex.fullName,
      message: "UserName must be 3-16 chars",
    },
  } as RegisterOptions;

  public static email = {
    required: {
      message: "Email is required",
      value: true,
    },
    pattern: {
      value: Regex.email,
      message: "Email is not valid",
    },
  } as RegisterOptions;

  public static password = {
    required: {
      value: true,
      message: "Password is required",
    },
    validate: {
      minLength: (v: string) =>
        v.length >= 8 || "Minimum 8 characters required",
      maxLength: (v: string) =>
        v.length <= 16 || "Maximum 16 characters allowed",
    },
  } as RegisterOptions;
}
