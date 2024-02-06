import SignUp from "@/components/SignUp";
import { useAuth } from "@/firebase/context/AuthContext";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = useAuth();
  if (user) {
    return redirect('/dashboard');
  }
  return (
    <SignUp/>
  )
}