import RightSideBarMessage from "../components/sidebar/right-sidebar/right-sidebar-message"
import LeftSideBarIcons from "../components/sidebar/side-bar-icons"

function Homepage() {
  return (
    <div className="h-full">
      <LeftSideBarIcons />
      <RightSideBarMessage />
    </div>
  )
}

export default Homepage
