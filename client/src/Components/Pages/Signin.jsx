import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      console.log(data);

      if (data.message === "Signin successful") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:items-center md:flex-row gap-10">
        <div className="flex-1">
          <Link to="/" className="text-3xl dark:text-white font-semibold">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-zinc-500 to-pink-500 rounded-lg text-white">
              Gyan's
            </span>
            Blog
          </Link>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, facilis?
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                id="email"
                placeholder="name@email.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                id="password"
                placeholder="*************"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign In
            </Button>
          </form>
          <div className="flex gap-2 mt-4">
            <span className="font-semibold">Don't Have An Account?</span>
            <Link className="text-blue-600 font-bold" to="/sign-up">
              Sign UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
