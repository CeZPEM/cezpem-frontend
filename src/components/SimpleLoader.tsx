export default function SimpleLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-1 animate-pulse">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce animation-delay-0" />
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce animation-delay-200" />
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce animation-delay-400" />
      </div>
    </div>
  );
}
