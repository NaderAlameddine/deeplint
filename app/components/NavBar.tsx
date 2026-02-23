import Link from "next/link";
import Logo from "../ui/Logo";

export default function NavBar() {
  return (
    <div>
      <Logo />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/history">History</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
