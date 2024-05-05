// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./styles.css";

// const Signup = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "http://localhost:3000/api/register";
//       const { data: res } = await axios.post(url, data);
//       navigate("/login");
//       console.log(res.message);
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
//       <h1>Welcome to Book Store</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={data.firstName}
//             onChange={handleChange}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={data.lastName}
//             onChange={handleChange}
//             className="border-2 border-gray-500 px-4 py-2  w-full "
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//             className="border-2 border-gray-500 px-4 py-2  w-full "
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={data.password}
//             onChange={handleChange}
//             className="border-2 border-gray-500 px-4 py-2  w-full "
//           />
//         </div>
//         {error && <div className="error_msg">{error}</div>}
//         <button type="submit" className="p-2 bg-sky-300 m-8">
//           Register
//         </button>
//       </form>
//       <h1>Already have account?</h1>
//       <Link to="/login">
//         <button type="button" className='p-2 bg-sky-300 m-8'>
//           Login
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-center text-2xl mb-4">Welcome to Book Store</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
          </div>
          {error && <div className="text-red-500 text-xs italic mb-4">{error}</div>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
