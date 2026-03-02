import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-black  w-full text-white py-4 text-[13px] flex md:flex-row sm:flex-col flex-col gap-2 justify-between items-center md:px-30 sm:px-10 px-5">
      <div className="flex items-center gap-2">
        <Link href={"/privacy-policy"} className="cursor-pointer">
          Terms & Conditions
        </Link>
        <Link href={"/termsAndConditions"} className="cursor-pointer">
          Privacy Policy
        </Link>
      </div>

      <div className="">
        © {currentYear} Dubai Building. All Rights Reserved.
      </div>
    </footer>
  );
}
