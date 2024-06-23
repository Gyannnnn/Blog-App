import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Signup = () => {
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
          <form className="flex flex-col gap-2">
            <div>
              <Label value="User Name"/>
              <TextInput type="text" id="username" placeholder="Enter Your User Name"/>
            </div>
            <div>
              <Label value="Your Email"/>
              <TextInput type="text" id="email" placeholder="name@email.com"/>
            </div>
            <div>
              <Label value="Your Passward"/>
              <TextInput type="passward" id="passward" placeholder="Enter Your Passward"/>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" >SignUP</Button>
          </form>
          <div className="flex gap-2 mt-4">
            <span className="font-semibold">Already Hav An Accout?</span>
            <Link className="text-blue-600 font-bold" to='/sign-in'>
            Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
