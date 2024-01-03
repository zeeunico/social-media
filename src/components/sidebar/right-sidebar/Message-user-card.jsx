import { SilverDividerVertical } from "./silver-divider";

export function MessageUserCard({username}) {
    return <a className="flex flex-col items-start mx-4 my-2 hover:transition-transform  hover:scale-95 ">
        <div className="right_sidebar_msg w-full flex items-center p-2 msg_bg_hvr">
            <div className="relative">
                <div className="absolute right-[-10px] bottom-[-10px] rounded-full notification-circle">
                    <span className="text-xs text-white p-1">62</span>
                </div>
                <img className="w-12 h-11 rs_common_b_radius" src="/imgaes/homepage/home-right-side-msg-icon.png" alt="" />
            </div>
            <div className="mx-2">
                <SilverDividerVertical />
            </div>
            <p>{username}</p>
        </div>
    </a>;
}