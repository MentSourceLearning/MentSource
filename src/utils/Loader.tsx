import { useState, useEffect } from "react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-[#D9432C] animate-spin" />
        <p className="text-gray-600">Loading…</p>
      </div>
    </div>
  );
};
export default Loader;

export const LoaderFunc = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 500);
    return () => clearTimeout(timer);
  }, []);
  return { loader, setLoader };
};
