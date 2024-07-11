'use client';

import Image from "next/image";
import NavBar from "../components/NavBar";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    user && (
      <div>
        <NavBar />
        <Image
          src={user.picture}
          alt={user.name}
          height={75}
          width={75}
        />
        <h2>Welcome {user.name}!</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}