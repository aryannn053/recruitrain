import Image from "next/image";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";

import { getSignInUrl, getSignUpUrl, getUser, signOut } from "@workos-inc/authkit-nextjs"

export default async function Home() {
  const {user} = await getUser();
  const signInUrl = await getSignInUrl();
  const SignUpUrl = await getSignUpUrl();
  
  return (
    <>
      <Hero/>
      <Jobs/>
    </>
  );
}