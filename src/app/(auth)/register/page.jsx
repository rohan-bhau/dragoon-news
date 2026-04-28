"use client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data,"data")
  };
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f2f2] flex items-center justify-center px-4">
      <div className="w-full bg-[#ffffff] max-w-[550px] p-3 md:7 lg:p-15 rounded-2xl border border-[#e7e7e7]">
        <h2 className="font-bold text-xl text-center text-[#403f3f] pb-7 mb-7 border-b border-[#e7e7e7]">
          Register Your Account
        </h2>
        <Form
          className="flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="text-lg">Name</Label>
            <Input {...register("name")} placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* photo url */}
          <TextField
            isRequired
            name="photo_url"
            validate={(value) => {
              if (!value.includes("https://")) {
                return "Enter a valid photo url";
              }
              return null;
            }}
          >
            <Label className="text-lg">Photo Url</Label>
            <Input
              {...register("photo_url")}
              placeholder="Enter Your Photo Url"
            />
            <FieldError />
          </TextField>

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
            <Label className="text-lg">Email Address</Label>
            <Input {...register("email")} placeholder="john@example.com" />
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
            <Label className="text-lg">Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full "
                type={isVisible ? "text" : "password"}
                placeholder="Enter Your Password"
                {...register("password")}
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

          {/* terms and conditions */}
          <Checkbox
            {...register("terms_ands_conditions", {
              required: "You must accept terms & conditions",
            })}
            id="basic-terms"
          >
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label htmlFor="basic-terms">Accept terms & conditions</Label>
            </Checkbox.Content>
            <FieldError />
          </Checkbox>
          {errors.terms_ands_conditions && (
            <p className="text-red-500 text-sm">
              {errors.terms_ands_conditions.message}
            </p>
          )}

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
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
