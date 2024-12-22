import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "@/stores/authContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) return;
    console.log({ email, password });

    if (password.length < 6) {
      setError("password must be at least 6 characters");
      return;
    }

    const isUserExist = users.find((user) => user.email === email);
    if (!isUserExist) {
      setError("User Not found");
      return;
    }
    if (isUserExist.password! == password) {
      setError("Password is incoorect");
    }

    // save useinfo in local storage
    localStorage.setItem("user", JSON.stringify(isUserExist));
    navigate("/");
  };

  return (
    <>
      {/* second step */}
      <div className="flex items-center justify-center h-screen px-2">
        {/* first step */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 w-full max-w-[400px]  bg-gray-300 p-4 rounded-lg"
        >
          <h3 className="text-center text-2xl font-bold mb-4">Sign In</h3>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-background"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-background"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={!email || !password}>
            Sign in
          </Button>
          {error && <p className="text-red-600"> {error} </p>}
          <div>
            <p>
              Don't have an account?
              <Link to="/sign-up" className="text-blue-800 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
