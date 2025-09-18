import Image from "next/image";

export const LoadingSpinner = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-center grow h-full w-full ${className}`}
    >
      <Image
        src="/portal.gif"
        alt="portal"
        className="border-green-400 rounded-full animate-spin bg-green-400 border-solid border-8"
        width={300}
        height={300}
        priority
      />
    </div>
  );
};
