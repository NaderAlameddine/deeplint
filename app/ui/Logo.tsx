import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={"/assets/Deeplint-logo.jpg"}
        height={52}
        width={42}
        alt="Deeplint logo"
      />
    </Link>
  );
}
