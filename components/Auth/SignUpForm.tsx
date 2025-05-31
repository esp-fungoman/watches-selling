import { useFormik } from "formik";
import Image from "next/image";
import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

import Button from "../Button";
import Divider from "../Divider";
import Input from "../Input";

// import { isValidEmail } from "../../helper/form.helpers";
import { AuthApi } from "../../services/auth";
import styles from "./Auth.module.scss";

interface SignUpFormProps {
  onCancel?: () => void;
}

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

const SignUpForm: FC<SignUpFormProps> = ({ onCancel }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: new Date(),
      phoneNumber: "",
      role: "user", // Default role
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.email.trim()) {
        errors.email = "Enter your email";
      }

      if (!values.password.trim()) {
        errors.password = "Enter your password";
      } else if (values.password.trim()?.length < 8) {
        errors.password = "Password must have more than 8 characters";
      }

      if (values.password.trim() !== values.confirmPassword.trim()) {
        errors.confirmPassword = "Password is not match";
      }

      if (!values.firstName.trim()) {
        errors.firstName = "Enter your first name";
      }

      if (!values.lastName.trim()) {
        errors.lastName = "Enter your last name";
      }

      if (!values.gender) {
        errors.gender = "Select your gender";
      }

      if (!values.dateOfBirth) {
        errors.dateOfBirth = "Enter your date of birth";
      }

      if (!values.phoneNumber.trim()) {
        errors.phoneNumber = "Enter your phone number";
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      await AuthApi.signUp({
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth.toISOString(),
        phoneNumber: values.phoneNumber,
        role: values.role,
      });
      resetForm();
      onCancel?.();
    },
  });

  function checkAuth() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.sign_in_form}>
      <h3 className="text-center font-semibold text-2xl">Sign Up</h3>
      <Input
        label="Email"
        placeholder="Enter your email"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && formik.errors.email}
      />
      <Input
        label="Password"
        placeholder="Enter your pasword"
        showEyeIcon
        {...formik.getFieldProps("password")}
        error={formik.touched.password && formik.errors.password}
      />
      <Input
        label="Confirm password"
        placeholder="Enter your pasword again"
        showEyeIcon
        {...formik.getFieldProps("confirmPassword")}
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Input
        label="First name"
        placeholder="Enter your first name"
        {...formik.getFieldProps("firstName")}
        error={formik.touched.firstName && formik.errors.firstName}
      />
      <Input
        label="Last name"
        placeholder="Enter your last name"
        {...formik.getFieldProps("lastName")}
        error={formik.touched.lastName && formik.errors.lastName}
      />
      <div>
        <label>Gender</label>
        <Select
          options={genderOptions}
          value={genderOptions.find(
            (option) => option.value === formik.values.gender
          )}
          onChange={(option) => formik.setFieldValue("gender", option?.value)}
          onBlur={() => formik.setFieldTouched("gender", true)}
          placeholder="Select your gender"
        />
        {formik.touched.gender && formik.errors.gender && (
          <div className="error">{formik.errors.gender}</div>
        )}
      </div>
      <div>
        <label>Date of Birth</label>
        <DatePicker
          selected={formik.values.dateOfBirth}
          onChange={(date) => formik.setFieldValue("dateOfBirth", date)}
          onBlur={() => formik.setFieldTouched("dateOfBirth", true)}
          placeholderText="Select your date of birth"
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
          <div className="error">{String(formik.errors.dateOfBirth)}</div>
        )}
      </div>
      <Input
        label="Phone number"
        placeholder="Enter your phone number"
        {...formik.getFieldProps("phoneNumber")}
        error={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />

      <div className="flex gap-4 mt-8">
        <Button
          // loading={formik.isSubmitting}
          className="flex-1"
          onClick={formik.submitForm}
        >
          Sign Up
        </Button>
        <Button
          className="flex-1"
          type="text"
          variant="danger"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
