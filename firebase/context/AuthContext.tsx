// import { useContext, createContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../config";

// //context: lets the parent component make information available to any component in the tree below it, no matter how deep, without passing it explicitly through props

// const AuthContext = createContext<any>({});
// //had to add <any> and {} to stop error/
// export const useAuth = () => useContext(AuthContext);

// //when destructuring an object in a function's parameters, ts needs to know the types of the destructured properties
// //react.reactnode encompasses everything that can be rendered in a React component
// export const AuthContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [user, setUser] = useState<any>(null);

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     // signInWithPopup(auth, provider);
//     signInWithRedirect(auth, provider);
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser({
//           uid: user.uid,
//           email: user.email,
//           displayname: user.displayName,
//         });
//       } else {
//         setUser(null);
//       }
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };

import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '@/firebase/config'

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}