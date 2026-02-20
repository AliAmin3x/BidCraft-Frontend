import React from "react";

const AnalyticsView = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-10 my-8 md:my-12">
      <div className="w-full sm:w-5/6 md:w-4/5 lg:w-2/3">
        <img
          src="/Images/analytics.png"
          className="w-full h-auto shadow-2xl rounded-xl"
          alt="Analytics Dashboard"
        />
      </div>
    </div>
  );
};

export default AnalyticsView;