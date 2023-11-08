import NavBar from "@/components/bars/navBar";
import SideBar from "@/components/bars/sideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <>
        <NavBar />
        <div className="main-wrapper w-full flex justify-center items-center container  ">
          <SideBar />
        </div>
      </>
    </main>
  );
}
