import Link from "next/link";

const Header = () => {
  return (
    <header className={`max-w-6xl mx-auto my-2`}>
      <nav className={`flex items-center gap-3`}>
        <Link href="/">메인 페이지</Link>
        <Link href="/menu">메뉴 소개</Link>
        <Link href="/announce">공지사항</Link>
      </nav>
    </header>
  );
};

export default Header;
