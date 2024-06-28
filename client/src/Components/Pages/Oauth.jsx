import { Button } from "flowbite-react";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import {useDispatch} from 'react-redux'
import { signInSuccess } from "../../Redux/User/userSlice";
import {useNavigate} from "react-router-dom"
const Oauth = () => {
  const auth = getAuth(app);
  const dispatch  =useDispatch()
  const navigate = useNavigate()

  const continueGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
        name:resultsFromGoogle.user.displayName,
        email:resultsFromGoogle.user.email,
        googlePhotoUrl:resultsFromGoogle.user.photoURL
       }),


      });
      const data = await res.json()
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={continueGoogle}
    >
      <h1 className="flex justify-center items-center ">
        Continue With Google{" "}
        <span className="pl-2 ">
          <FaGoogle className="text-xl" />
        </span>{" "}
      </h1>
    </Button>
  );
};

export default Oauth;
