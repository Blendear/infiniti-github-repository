// //
// //  0.  Reducer / State
// //
// //  1.  "Submit" Handler - dzięki next.js'ej "signIn" function, SPRÓBUJ się zalogowac, passy wysyłając
// //
// //  2.  Input fieldy i button pod logowanie
// //
// //      2.1.   Email
// //
// //      2.2.   Hasło
// //
// //      2.3.   Submit button

// import { NextPage } from "next";
// import { signIn } from "next-auth/react";
// import { FormEventHandler, useState } from "react";

// import styles from "src/styles/sass/styles-all.module.scss";

// const SignIn: NextPage = (props): JSX.Element => {
//   //
//   //  0.  Reducer / State
//   //
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });
//   //
//   //  1.  "Submit" Handler - dzięki next.js'ej "signIn" function, SPRÓBUJ się zalogowac, passy wysyłając
//   //
//   const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();

//     const res = await signIn("credentials", {
//       email: userInfo.email,
//       password: userInfo.password,
//       redirect: false,
//     });

//     console.log(res);
//   };
//   //
//   //  2.  Input fieldy i button pod logowanie
//   //
//   return (
//     <div className={styles.eksperymentalny}>
//       {/* 2.1.   Email */}
//       <form onSubmit={submitHandler}>
//         <h1>Login, seksiaku</h1>
//         <input
//           value={userInfo.email}
//           onChange={(event) =>
//             setUserInfo({ ...userInfo, email: event.target.value })
//           }
//           //hook2 /\ nie powinienem tu zastosowac "previous state" sposobu? Czy new state nie zalezy od previous?
//           type="email"
//           placeholder="twojemail@email.com"
//         />
//         {/* 2.2.   Hasło */}
//         <input
//           value={userInfo.password}
//           onChange={(event) =>
//             setUserInfo({ ...userInfo, password: event.target.value })
//           }
//           type="password"
//           placeholder="********"
//         />
//         {/* 2.3.   Submit button */}
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// export default SignIn;
