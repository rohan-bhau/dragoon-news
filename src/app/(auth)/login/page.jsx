"use client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f2f2] flex items-center justify-center px-4">
      <div className="w-full bg-[#ffffff] max-w-[550px] p-3 md:7 lg:p-15 rounded-2xl border border-[#e7e7e7]">
        <h2 className="font-bold text-xl text-center text-[#403f3f] pb-7 mb-7 border-b border-[#e7e7e7]">
          Login Your Account
        </h2>
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xl">Email Address</Label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* password */}
          <TextField
            className="w-full"
            name="password"
            isRequired
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full "
                type={isVisible ? "text" : "password"}
                placeholder="Enter Your Password"
                name="password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* submit and reset button */}
          <div className="flex justify-center gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>

          <p className="font-bold text-lg  text-center">
            <span className="text-[#706f6f]">Don't Have An Account? </span>
            <span className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent">
              <Link href="/register">Register</Link>
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
