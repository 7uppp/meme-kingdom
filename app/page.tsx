import NavBar from "@/components/bars/navBar";
import SideBar from "@/components/bars/sideBar";
import MobileFooter from "@/components/footer/mobileFooter";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex justify-center items-center w-full fixed">
        <div className="main-wrapper w-full flex justify-evenly container border-box pt-8 pb-8">
          <div className="side-bar md:flex-2">
            <SideBar />
          </div>
          <div className="main-content flex-grow"></div>
        </div>
      </main>
      <footer className="md:hidden fixed bottom-10 ">{<MobileFooter />}</footer>
    </>
  );
}
