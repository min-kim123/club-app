import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

export default function LogIn() {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>

        <h1 className='text-2xl font-semibold tracking-tight'>Sign In</h1>

      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Don't have an account?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign up
        </Link>
      </p>
    </div>
  )
  
}
