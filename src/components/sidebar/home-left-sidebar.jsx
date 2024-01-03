// Jisan Is working

const HomeLeftSideBar = () => {

    return (
        <div className="h-full md:ml-24 md:w-96 flex flex-col items-center md:fixed overflow-auto bg-red-500">
            <div className="card bg-base-100 shadow-xl card-bg-lblue mx-8 my-4">
                <img className="card-bg-image" src="/imgaes/profile-background-img.png" alt="profile-background" />
                <div className="card-body">
                    <div className="flex">
                        <div className="flex flex-col items-center font-orbitron">
                            <p className="text-3xl">123K</p>
                            <p className="text-sm">Followers</p>
                        </div>
                        {/* <img className="card-bg-image" src="/imgaes/profile-picture.png" alt="profile-picture" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLeftSideBar;