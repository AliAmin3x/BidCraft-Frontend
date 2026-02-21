import HeroWavesTopGradient from "../components/HeroWavesTopGradient";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: success
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleSendOtp = (e) => {
    e.preventDefault();
    // TODO: Call backend to send OTP
    console.log("Send OTP to:", email);
    setStep(2);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleConfirmOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    // TODO: Verify OTP with backend
    console.log("Entered OTP:", enteredOtp);
    setStep(3);

    setTimeout(() => {
      navigate("/login");
    }, 2000); // redirect after 2 seconds
  };

  return (
    <div className="relative w-full min-h-screen">
      <HeroWavesTopGradient />

      <div className="relative z-50 flex items-center justify-center min-h-screen px-4">
        <div className="relative w-[90%] sm:w-[80%] md:w-[60%] lg:w-2/5 bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">

          {/* Close Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl cursor-pointer"
          >
            <IoClose />
          </button>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            BidCraft
          </h1>

          {step === 1 && (
            <form className="space-y-4" onSubmit={handleSendOtp}>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Reset Your Password
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Enter your email below and we'll send you a link to reset your password.
                </p>
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#2474e4] px-6 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-[#1e5bb8] transition duration-300 cursor-pointer"
                >
                  Send OTP
                </button>
              </div>

              <div>
                <h2 className="text-sm">
                  Remembered your password?
                  <span
                    onClick={() => navigate("/login")}
                    className="text-blue-700 hover:underline cursor-pointer ml-1"
                  >
                    Login
                  </span>
                </h2>
              </div>
            </form>
          )}

          {step === 2 && (
            <form className="space-y-4" onSubmit={handleConfirmOtp}>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Enter OTP
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  We sent a 6-digit OTP to <strong>{email}</strong>.
                </p>
              </div>

              <div className="flex justify-between mt-4">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#2474e4] px-6 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-[#1e5bb8] transition duration-300 cursor-pointer"
                >
                  Confirm OTP
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-10">
              <h2 className="text-xl font-bold text-green-600">OTP Verified!</h2>
              <h2 className="text-xl font-bold text-black">Password has been Reset</h2>
              <p className="text-gray-600 mt-2">Redirecting to login...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;