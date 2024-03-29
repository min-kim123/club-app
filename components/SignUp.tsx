
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
import AuthFirebase from "./AuthFirebase";

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>

        <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>

      </div>
      <AuthFirebase/>
      {/* <UserAuthForm /> */}
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Already have an account?{' '}
        <Link
          href='/'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignUp