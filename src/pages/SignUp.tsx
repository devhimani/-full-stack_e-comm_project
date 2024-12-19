import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      {/* second step */}
      <div className="flex items-center justify-center h-screen px-2">
        {/* first step */}
        <div className="flex flex-col space-y-4 w-full max-w-[400px]  bg-gray-300 p-4 rounded-lg">
          <h3 className="text-center text-2xl font-bold mb-4">Sign Up</h3>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="name"
              placeholder="Name"
              className="bg-background"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-background"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-background"
            />
          </div>
          <Button>Sign Up</Button>
          <div>
            <p>
              Already have an account?
              <Link to="/sign-in" className="text-blue-800 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
