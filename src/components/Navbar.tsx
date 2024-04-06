import LogoImg from "@/assets/logo-blue.png";
import { Stack } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  return (
    <Stack padding={2} alignItems="center">
      <Image src={LogoImg} alt="logo avatar" width={150} />
    </Stack>
  );
};

export default Navbar;
