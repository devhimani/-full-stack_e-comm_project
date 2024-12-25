import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { authContext } from "@/stores/authContext";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(authContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      if (users.some((user) => user.email === values.email)) {
        formik.setErrors({ email: "Email already exist" });
        return;
      }
      setUsers([...users, values]);
      formik.resetForm();

      console.log(values);
      navigate("/sign-in");
    },
  });
  console.log(formik.errors);
  return (
    <>
      {/* second step */}
      <div className="flex items-center justify-center h-screen px-2">
        {/* first step */}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4 w-full max-w-[400px]  bg-gray-300 p-4 rounded-lg"
        >
          <h3 className="text-center text-2xl font-bold mb-4">Sign Up</h3>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="name"
              placeholder="Name"
              className="bg-background"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p className="text-red-800">{formik.errors.name}</p>
            )}
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-background"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="text-red-800">{formik.errors.email}</p>
            )}
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-background"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <p className="text-red-800">{formik.errors.password}</p>
            )}
          </div>
          <Button type="submit">Sign Up</Button>
          <div>
            <p>
              Already have an account?
              <Link to="/sign-in" className="text-blue-800 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
