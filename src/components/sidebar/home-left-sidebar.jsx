// Jisan Is working
import "./homeleftsidebar.css"

const HomeLeftSideBar = () => {

    return (
        <>
            <div className="hidden h-full w-24 md:flex flex-col items-center overflow-auto">
                <div className="profile-info">
                    <p>Check profile</p>
                </div>
            </div>
            <div style={{ border: '1px solid', borderColor: "#2e2e2e" }} className="mx-52 "></div>
        </>
    );
}

export default HomeLeftSideBar;