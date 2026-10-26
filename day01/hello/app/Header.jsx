import Link from "next/link";

const Header = () => {
  return (
    <header className={`max-w-6xl mx-auto my-2`}>
      <nav className={`flex items-center gap-3`}>
        <Link className={`w-fit border px-2 py-0.5`} href="/">
          홈
        </Link>
        <Link className={`w-fit border px-2 py-0.5`} href="/t1">
          티원
        </Link>
        <Link className={`w-fit border px-2 py-0.5`} href="/geng">
          젠지
        </Link>
        <Link className={`w-fit border px-2 py-0.5`} href="/dk">
          DK
        </Link>
        <Link className={`w-fit border px-2 py-0.5`} href="/hanhwa">
          한화
        </Link>
      </nav>
    </header>
  );
};

export default Header;
