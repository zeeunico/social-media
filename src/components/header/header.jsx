import HeaderLogo from "./headerLogo";
import "./header.css";
function Header() {
  return (
    <nav>
      <div className="flex flex-wrap items-center mx-auto md:py-6 md:px-4 py-4 px-2 drawer drawer-content">

        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="flex justify-between w-full md:w-auto">
          <HeaderLogo />

          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
        </div>

        <div className="hidden md:flex grow items-center">
          <div className="hidden md:flex create-btn items-center mx-8 px-4 element-with-gradient h-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="white"/>
            </svg>

            <p className="block py-0 px-3 text-white text-sm">Create</p>
          </div>

            <div className="relative grow">
              <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M12.9825 12.5447L12.6584 12.898L12.9978 13.2366L15.4693 15.703C15.5062 15.7399 15.5053 15.7976 15.4701 15.8328L15.4677 15.8352C15.4516 15.8516 15.4298 15.8609 15.4044 15.8609C15.3808 15.8609 15.3574 15.8521 15.3384 15.8333C15.3384 15.8333 15.3383 15.8332 15.3383 15.8332L12.8372 13.3392L12.5206 13.0234L12.1716 13.3029C10.9408 14.2886 9.38152 14.8781 7.68618 14.8781C3.72243 14.8781 0.496735 11.6524 0.496735 7.68866C0.496735 3.72497 3.72236 0.5 7.68618 0.5C11.6499 0.5 14.8748 3.72491 14.8748 7.68866C14.8748 9.55863 14.1577 11.2638 12.9825 12.5447ZM7.68618 0.684328C3.82318 0.684328 0.681063 3.8255 0.681063 7.68866C0.681063 11.5517 3.82311 14.6938 7.68618 14.6938C11.5485 14.6938 14.6905 11.5517 14.6905 7.68866C14.6905 3.82554 11.5484 0.684328 7.68618 0.684328Z" fill="white" stroke="url(#paint0_linear_9_2340)"/>
                <defs>
                  <linearGradient id="paint0_linear_9_2340" x1="9.24349" y1="43.0417" x2="6.41726" y2="-8.63239" gradientUnits="userSpaceOnUse">
                    <stop offset="0.415127" stopColor="#0B0022"/>
                    <stop offset="0.79499" stopColor="#E07B65" stopOpacity="0.78"/>
                  </linearGradient>
                </defs>
              </svg>
              </div>
              <input type="search" className="element-with-gradient block w-full p-4 ps-16 text-sm rounded-full bg-black" placeholder="Explore" />
            </div>

            <div className="flex mx-8">
              <button className="gradient-btn-black p-4" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.59585 0H15.3959C19.0358 0 21.9958 2.9601 21.9958 6.6V15.4C21.9958 19.0399 19.0358 22 15.3959 22H1.09585C0.804111 22 0.524322 21.8841 0.318032 21.6778C0.111742 21.4715 -0.00415039 21.1917 -0.00415039 20.9V6.6C-0.00415039 2.9601 2.95595 0 6.59585 0ZM4.88675 6.4165C4.38004 6.4165 3.96927 6.82727 3.96927 7.33398C3.96927 7.84069 4.38004 8.25146 4.88675 8.25146H17.109C17.6157 8.25146 18.0265 7.84069 18.0265 7.33398C18.0265 6.82727 17.6157 6.4165 17.109 6.4165H4.88675ZM4.88675 10.6943C4.38004 10.6943 3.96927 11.1051 3.96927 11.6118C3.96927 12.1185 4.38004 12.5292 4.88675 12.5292H17.109C17.6157 12.5292 18.0265 12.1185 18.0265 11.6118C18.0265 11.1051 17.6157 10.6943 17.109 10.6943H4.88675ZM4.88675 14.9721C4.38004 14.9721 3.96927 15.3828 3.96927 15.8895C3.96927 16.3963 4.38004 16.807 4.88675 16.807H11.6769C12.1836 16.807 12.5944 16.3963 12.5944 15.8895C12.5944 15.3828 12.1836 14.9721 11.6769 14.9721H4.88675Z" fill="white"/>
                </svg>
              </button>

              <button className="gradient-btn-black mx-2 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 24" fill="none">
                <path d="M8.47319 20.6735C9.0921 20.5466 12.8634 20.5466 13.4824 20.6735C14.0114 20.7919 14.5836 21.0687 14.5836 21.673C14.5528 22.2483 14.2046 22.7583 13.7235 23.0822C13.0997 23.5536 12.3676 23.8521 11.6022 23.9597C11.1789 24.0128 10.7631 24.014 10.3545 23.9597C9.58797 23.8521 8.85586 23.5536 8.23325 23.081C7.75091 22.7583 7.40269 22.2483 7.37193 21.673C7.37193 21.0687 7.94409 20.7919 8.47319 20.6735ZM11.0509 0C13.6262 0 16.2569 1.18442 17.8196 3.1496C18.8335 4.415 19.2986 5.67919 19.2986 7.64436V8.1556C19.2986 9.66271 19.7095 10.551 20.6139 11.5747C21.2993 12.3289 21.5183 13.297 21.5183 14.3472C21.5183 15.3963 21.1627 16.3922 20.4503 17.2007C19.5176 18.17 18.2022 18.7888 16.8598 18.8964C14.9145 19.0571 12.9679 19.1925 10.9955 19.1925C9.02184 19.1925 7.0765 19.1115 5.13116 18.8964C3.7875 18.7888 2.47215 18.17 1.5407 17.2007C0.828266 16.3922 0.471436 15.3963 0.471436 14.3472C0.471436 13.297 0.691686 12.3289 1.37582 11.5747C2.3085 10.551 2.6924 9.66271 2.6924 8.1556V7.64436C2.6924 5.62601 3.21165 4.30622 4.28091 3.01423C5.87066 1.13004 8.41892 0 10.9401 0H11.0509Z" fill="white"/>
                </svg>
              </button>
            </div>

          <div className="flex">
            <div className="flex-col">
              <p className="text-end">Oblivionisme</p>
              <p className="gradient-text-username text-end">@Oblivion</p>
            </div>
            <div className="avatar mx-4">
              <div className="w-12 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>

        {/* {FOR MOBILE} */}
        <div className="drawer-side z-30">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-black border-r-2">
            {/* Sidebar content here :MOBILE */}
            <li>
              <div className="flex items-center justify-center">
                <HeaderLogo />
              </div>
            </li>
            <li>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M12.9825 12.5447L12.6584 12.898L12.9978 13.2366L15.4693 15.703C15.5062 15.7399 15.5053 15.7976 15.4701 15.8328L15.4677 15.8352C15.4516 15.8516 15.4298 15.8609 15.4044 15.8609C15.3808 15.8609 15.3574 15.8521 15.3384 15.8333C15.3384 15.8333 15.3383 15.8332 15.3383 15.8332L12.8372 13.3392L12.5206 13.0234L12.1716 13.3029C10.9408 14.2886 9.38152 14.8781 7.68618 14.8781C3.72243 14.8781 0.496735 11.6524 0.496735 7.68866C0.496735 3.72497 3.72236 0.5 7.68618 0.5C11.6499 0.5 14.8748 3.72491 14.8748 7.68866C14.8748 9.55863 14.1577 11.2638 12.9825 12.5447ZM7.68618 0.684328C3.82318 0.684328 0.681063 3.8255 0.681063 7.68866C0.681063 11.5517 3.82311 14.6938 7.68618 14.6938C11.5485 14.6938 14.6905 11.5517 14.6905 7.68866C14.6905 3.82554 11.5484 0.684328 7.68618 0.684328Z" fill="white" stroke="url(#paint0_linear_9_2340)"/>
                  <defs>
                    <linearGradient id="paint0_linear_9_2340" x1="9.24349" y1="43.0417" x2="6.41726" y2="-8.63239" gradientUnits="userSpaceOnUse">
                      <stop offset="0.415127" stopColor="#0B0022"/>
                      <stop offset="0.79499" stopColor="#E07B65" stopOpacity="0.78"/>
                    </linearGradient>
                  </defs>
                </svg>
                </div>
                <input type="search" className="element-with-gradient block w-full p-4 ps-16 text-sm rounded-full bg-black" placeholder="Explore" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style={{border: '1px solid',borderColor:"#2e2e2e"}} className="mx-52 "></div>
    </nav>
  )
}

export default Header;