import Link from "next/link";

const page = () => {
  return (
    <>
      T1~
      <Link href="/t1/faker" className={`w-fit border px-2 py-0.5`}>
        멤버 1
      </Link>
    </>
  );
};

export default page;
