import { SilverDividerVertical } from "./silver-divider";

export function MessageUserCard({username}) {
    return <a className="flex flex-col items-start mx-4 my-2 hover:transition-transform  hover:scale-95 ">
        <div className="right_sidebar_msg w-full flex items-center p-2 msg_bg_hvr">
            <img className="w-12 h-11 rs_common_b_radius" src="/imgaes/homepage/home-right-side-msg-icon.png" alt="" />
            <div className="mx-2">
                <SilverDividerVertical />
            </div>
            <p>{username}</p>
        </div>
    </a>;
}