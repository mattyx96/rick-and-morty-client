import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={100}
      height={100}
      className="w-auto h-12"
    />
  );
};
