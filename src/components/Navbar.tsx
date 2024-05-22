import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = async () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            {/* VE<span className="text-green-600">GY</span> */}
      <img src="Logo-Vegy.png" alt="Img-Logo"
     className="absolute w-8 lg:w-14 left-56 -top-0 select-none hidden sm:block lg:hidden xl:block rounded-full "
/>
          </Link>

          <div className="h-full flex items-center space-x-4">
            Hotline: 01674027409
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
