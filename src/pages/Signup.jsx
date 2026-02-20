import HeroWavesTopGradient from "../components/HeroWavesTopGradient"
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

    return (
    <div className="relative w-full min-h-screen">

      {/* Background Waves */}
      <HeroWavesTopGradient />

      {/* Card Wrapper */}
      <div className="relative z-50 flex items-center justify-center min-h-screen px-4">

        {/* Signup Card */}
        <div className="relative 
                        w-[90%] 
                        sm:w-[80%] 
                        md:w-[60%] 
                        lg:w-2/5 
                        bg-white 
                        rounded-2xl 
                        shadow-xl 
                        p-6 sm:p-8 md:p-10 
                        space-y-6">

          {/* Close Button */}
          <button onClick={() => navigate('/')}  className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl cursor-pointer">
            <IoClose />
          </button>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            BidCraft
          </h1>

          <form className="space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                Create your account
              </h2>
            </div>

            {/* Full Name */}
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5"
                placeholder="Email Address"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5"
                placeholder="Create Password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5"
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" required />
              <p>
                I agree to the{" "}
                <span className="text-blue-700 hover:underline cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {/* Already have account */}
            <div>
              <h2 className="text-sm">
                Already have an account?
                <span onClick={() => navigate('/login')} className="text-blue-700 hover:underline cursor-pointer ml-1">
                  Login here
                </span>
              </h2>
            </div>

            {/* Button */}
            <div className="pt-4">
              <button className="w-full bg-[#2474e4] px-6 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-[#1e5bb8] transition duration-300 cursor-pointer">
                Sign Up
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Signup