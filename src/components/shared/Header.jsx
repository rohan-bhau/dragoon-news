import Image from "next/image";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="py-12 text-center">
      <Image
        src={logo}
        width={470}
        height={60}
        alt="logo"
        className="mx-auto mb-2"
      />
      <p className="text-[#706F6F] text-xl">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-semibold">
        <span>{format(new Date(), "EEEE,")}</span>
        <span className="text-[#706F6F]">{format(new Date(), "MMMM dd, yyy")}</span>
      </p>
    </div>
  );
};

export default Header;
