import HomeLeftSideBar from "../components/sidebar/home-left-sidebar";
import LeftSideBarIcons from "../components/sidebar/side-bar-icons"


function Homepage() {
  return (
    <>
      <div className="h-full">
        <LeftSideBarIcons />
      </div>
      {/* <div className="h-full">
        <HomeLeftSideBar />
      </div> */}
    </>
  )
}

export default Homepage
