export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Spinning circle loader */}
        <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 text-center">Loading...</p>
      </div>
    </div>
  );
}