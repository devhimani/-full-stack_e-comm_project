import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
