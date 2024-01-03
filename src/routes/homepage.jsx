import HomeLeftSideBar from "../components/sidebar/home-left-sidebar";
import LeftSideBarIcons from "../components/sidebar/side-bar-icons"


function Homepage() {
  return (
      <div className="h-full">
        <LeftSideBarIcons />
        <HomeLeftSideBar />
      </div>
  )
}

export default Homepage
