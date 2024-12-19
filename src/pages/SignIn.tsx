import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      {/* second step */}
      <div className="flex items-center justify-center h-screen px-2">
        {/* first step */}
        <div className="flex flex-col space-y-4 w-full max-w-[400px]  bg-gray-300 p-4 rounded-lg">
          <h3 className="text-center text-2xl font-bold mb-4">Sign In</h3>
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
          <Button>Sign in</Button>
          <div>
            <p>
              Don't have an account?
              <Link to="/sign-up" className="text-blue-800 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
