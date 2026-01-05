import { RiMailCheckFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

export const VerifyEmailReminder = () => {
  const location = useLocation();
  const { email } = location.state || {};

  const maskMail = () => {
    if (!email) return "";

    const [name, domain] = email.split("@");

    if (name.length <= 4) {
      return name[0] + "*".repeat(name.length - 2) + name[name.length - 1] + "@" + domain;
    }

    const firstTwo = name.slice(0, 2);
    const lastTwo = name.slice(-2);
    const stars = "*".repeat(name.length - 4);

    return `${firstTwo}${stars}${lastTwo}@${domain}`;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white  shadow-xl rounded p-8 w-full max-w-md text-center border border-gray-100 ">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <RiMailCheckFill size={28} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-800">Verify your email</h2>

        {/* Info */}
        <p className="text-gray-600 dark:text-gray-400 mt-3">We’ve sent a verification link to</p>

        {/* Masked Email */}
        <div className="mt-3 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
          {maskMail()}
        </div>

        {/* Expiry Note */}
        <p className="text-sm text-gray-600 mt-5">
          Please verify your account within{" "}
          <span className="font-semibold text-gray-700">24 hours</span>, otherwise the link will
          expire.
        </p>

        {/* Help Box */}
        <div className="mt-6 rounded-lg bg-gray-100 p-4 text-sm text-gray-600 ">
          Didn’t receive the email?
          <br />
          <span className="font-medium text-gray-800 ">Check your spam or promotions folder.</span>
        </div>
      </div>
    </div>
  );
};
