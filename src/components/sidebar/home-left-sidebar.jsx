// Jisan Is working
import HorizontalDevider from "../sidebarComponents/horizontalDevider";
import YouMayKnowCard from "../sidebarComponents/youMayKnowCards";
import "./homeleftsidebar.css"
const HomeLeftSideBar = () => {

    return (
        <div className="h-full md:ml-10 md:w-96 flex flex-col items-center md:fixed overflow-auto">
            <div className="profile-info card bg-base-100 shadow-xl card-bg-lblue mx-8 my-4">
                <div className="flex flex-col relative">
                    <div className="card-bg-image" style={{ background: 'url("/imgaes/profile-background-img.png")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}></div>
                    {/* <img className="card-bg-image" src="/imgaes/profile-background-img.png" alt="profile-background" /> */}
                    <div className="card-profile-image absolute" style={{ background: 'url("/imgaes/profile-picture.png")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></div>
                </div>
                
                <div className="p-2 mt-2">
                    <div className="flex justify-between">
                        <div className="text-center flex flex-col justify-items-start font-orbitron">
                            <span className="fc">123K</span>
                            <span className="ft">Followers</span>                           
                        </div>
                        <div className="text-center flex flex-col justify-items-end font-orbitron">
                            <span className="fc">123K</span>
                            <span className="ft">Following</span>                           
                        </div>
                        
                        {/* <img className="card-bg-image" src="/imgaes/profile-picture.png" alt="profile-picture" /> */}
                    </div>
                    <div className="text-center mt-1">
                        <p className="pn">Oblivion Isme</p>
                        <p className="pt">@oblivion123</p>
                    </div>
                    <div>
                        <div className="text-center relative mt-4">
                            <svg className="absolute frc" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <circle cx="15" cy="15" r="14.5" fill="url(#paint0_linear_1_682)" stroke="url(#paint1_linear_1_682)" />
                                <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="0.75rem" font-family="Poppins" >
                                    99+
                                </text>
                                <defs>
                                    <linearGradient id="paint0_linear_1_682" x1="23.3765" y1="51.5107" x2="14.9876" y2="-9.21303" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F7B8A3" />
                                        <stop offset="0.1947" stop-color="#E5044C" />
                                        <stop offset="0.2623" stop-color="#B20444" />
                                        <stop offset="0.333" stop-color="#84033D" />
                                        <stop offset="0.4066" stop-color="#5D0337" />
                                        <stop offset="0.4818" stop-color="#3C0332" />
                                        <stop offset="0.5594" stop-color="#24022E" />
                                        <stop offset="0.6401" stop-color="#12022B" />
                                        <stop offset="0.7262" stop-color="#07022A" />
                                        <stop offset="0.8266" stop-color="#040229" />
                                        <stop offset="1" stop-color="#002E46" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_682" x1="1" y1="12.408" x2="35.3297" y2="3.99293" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.304362" stop-color="#FF8933" />
                                        <stop offset="1" stop-color="#45074F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg className="relative frsvg" xmlns="http://www.w3.org/2000/svg" width="206" height="50" viewBox="0 0 206 50" fill="none">
                                <rect x="0.5" y="0.5" width="205" height="49" rx="16.5" fill="url(#paint0_linear_1_636)" />
                                <rect x="0.5" y="0.5" width="205" height="49" rx="16.5" fill="#070300" fill-opacity="0.63" />
                                <rect x="0.5" y="0.5" width="205" height="49" rx="16.5" stroke="url(#paint1_linear_1_636)" />
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="0.9375rem"  font-family="Poppins">
                                    Friend Requests
                                </text>
                                <defs>
                                    <linearGradient id="paint0_linear_1_636" x1="146.045" y1="2.4" x2="145.941" y2="77.402" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#010101" />
                                        <stop offset="0.294494" stop-color="#3A3A3A" stop-opacity="0.984375" />
                                        <stop offset="0.542042" />
                                        <stop offset="1" stop-opacity="0.6" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_636" x1="119.052" y1="131.538" x2="116.996" y2="-26.8269" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.415127" stop-color="#0B0022" />
                                        <stop offset="0.79499" stop-color="#E07B65" stop-opacity="0.78" />
                                    </linearGradient>                              
                                </defs>
                            </svg>
                        </div>
                        <div className="birthday-card flex flex-col mt-2">
                            <div className="flex flex-wrap p-2">
                                <svg className="gift-icon" xmlns="http://www.w3.org/2000/svg" width="10.99981rem" height="1.125rem" viewBox="0 0 0.99981rem 1.125rem" fill="none">
                                    <path d="M4.10719 10.744C4.87663 10.9102 5.63161 10.9283 6.35794 10.8028C6.8057 10.7225 7.16224 10.6081 7.47978 10.4402C7.51295 10.4217 7.54819 10.4028 7.58308 10.3818C7.73853 10.2909 7.87625 10.1836 7.99315 10.067L8.54912 11.0265C5.73403 12.5756 3.05421 13.2608 1.74901 12.8329C1.49647 12.2262 1.88676 11.3168 2.73514 10.3124C3.14969 10.4893 3.60357 10.6338 4.10719 10.744Z" fill="url(#paint0_linear_1_662)" />
                                    <path d="M6.43563 9.61481C6.36848 9.62191 6.30097 9.62692 6.22653 9.62881C5.70127 9.64272 5.12743 9.54658 4.47729 9.34079C4.28311 9.27913 4.09683 9.20106 3.91571 9.11567C4.1869 8.87604 4.47712 8.63534 4.78882 8.39529C5.06357 8.67987 5.35239 8.9341 5.65594 9.14926C5.9258 9.34219 6.18269 9.49645 6.43563 9.61481Z" fill="url(#paint1_linear_1_662)" />
                                    <path d="M15.1114 6.33509C15.7853 7.49828 13.758 9.96327 10.5314 11.9823L9.71662 10.5807C12.4538 8.87483 14.3673 6.85934 14.6287 5.50509L15.1114 6.33509Z" fill="url(#paint2_linear_1_662)" />
                                    <path d="M10.1522 6.01312C10.0116 6.68225 9.81025 7.23264 9.53755 7.68976C9.47427 7.79514 9.40679 7.88833 9.33996 7.97281C9.36744 7.66917 9.35987 7.34783 9.31548 6.99832C9.2689 6.62338 9.18768 6.24571 9.07426 5.86706C9.47004 5.69446 9.85655 5.5428 10.2317 5.41242C10.2187 5.61251 10.195 5.81227 10.1522 6.01312Z" fill="url(#paint3_linear_1_662)" />
                                    <path d="M16.1742 9.39574L17.7832 12.166C18.3988 13.2251 16.5603 15.4688 13.627 17.3154L10.7401 12.3403C13.0922 10.8697 14.8058 9.16137 15.3016 7.89205L16.1742 9.39574Z" fill="url(#paint4_linear_1_662)" />
                                    <path d="M12.5578 17.9397C9.51562 19.5984 6.66813 20.1012 6.05461 19.0418L4.44567 16.2715L3.57302 14.7678C4.91498 14.9594 7.23823 14.3003 9.67087 12.9646L12.5578 17.9397Z" fill="url(#paint5_linear_1_662)" />
                                    <path d="M8.64949 11.2062L9.46424 12.6079C6.12674 14.4393 2.99415 14.9991 2.32065 13.838L1.83794 13.008C3.13833 13.4454 5.82473 12.7613 8.64949 11.2062Z" fill="url(#paint6_linear_1_662)" />
                                    <path d="M9.53016 9.2407C9.56505 9.21972 9.59993 9.19874 9.63274 9.17811C9.93286 8.98304 10.2078 8.72773 10.4965 8.37758C10.9651 7.80332 11.3193 7.13448 11.5534 6.38709C11.7075 5.88559 11.8091 5.41451 11.8588 4.96514C13.1453 4.71659 14.1226 4.8238 14.5268 5.34235C14.2543 6.69419 12.3439 8.7027 9.61637 10.4026L9.06075 9.44515C9.215 9.39745 9.37263 9.33197 9.53016 9.2407Z" fill="url(#paint7_linear_1_662)" />
                                    <path d="M8.40925 9.68253L8.43067 9.67029C8.49873 9.63078 8.56536 9.5829 8.62678 9.52945L9.25494 10.6122C9.19691 10.6479 9.13888 10.6835 9.07878 10.7196C9.01868 10.7556 8.95994 10.7871 8.89948 10.821L8.27689 9.74587C8.32287 9.72731 8.36849 9.70666 8.40925 9.68253Z" fill="url(#paint8_linear_1_662)" />
                                    <path d="M9.3614 10.7944L10.1765 12.1981C10.1185 12.2338 10.0604 12.2695 9.99999 12.3034C9.93989 12.3394 9.88115 12.3709 9.82104 12.4069L9.00594 11.0031C9.0664 10.9692 9.12513 10.9377 9.18524 10.9017C9.24534 10.8657 9.30337 10.83 9.3614 10.7944Z" fill="url(#paint9_linear_1_662)" />
                                    <path d="M10.3869 12.5543L13.2742 17.5315C13.2161 17.5672 13.1581 17.6028 13.0976 17.6368C13.0372 17.6707 12.9788 17.7043 12.9187 17.7403L10.0294 12.7634C10.0898 12.7295 10.1486 12.698 10.2087 12.662C10.2688 12.626 10.3265 12.5882 10.3869 12.5543Z" fill="url(#paint10_linear_1_662)" />
                                    <path d="M1.32132 8.77999C1.56965 9.12283 1.87366 9.36588 2.18789 9.56848C2.82252 9.95972 3.50878 10.1895 4.18742 10.3367L4.19192 10.338C4.87922 10.4859 5.59095 10.5135 6.28163 10.3919C6.62558 10.3292 6.96663 10.2369 7.28209 10.0693C7.54505 9.93216 7.80631 9.72218 7.94257 9.43018C8.03215 9.40422 8.12031 9.36989 8.20391 9.32128C8.31516 9.25938 8.41247 9.17833 8.4952 9.08685C8.82398 9.12351 9.14791 8.99323 9.40346 8.82508C9.70149 8.63037 9.95115 8.3772 10.1744 8.10699C10.6182 7.56275 10.9442 6.92882 11.1547 6.25642L11.1574 6.24735C11.3624 5.58019 11.5018 4.8661 11.4751 4.11782C11.4545 3.74492 11.3933 3.35954 11.2186 2.97195C11.1264 2.78112 11.0144 2.5872 10.8402 2.41675C10.6702 2.24559 10.4407 2.10173 10.1834 2.03357L10.0972 2.01596C10.084 2.01389 10.042 2.00595 10.0029 2.00185C9.91974 1.99016 9.86019 1.99167 9.79441 1.99423C9.66735 2.00075 9.54242 2.01981 9.42863 2.05419C9.19863 2.1212 9.00586 2.23137 8.83599 2.35055C8.49765 2.59727 8.25895 2.90236 8.0528 3.21052C7.90969 3.437 7.79398 3.67389 7.69143 3.91284C7.40571 3.48817 7.073 3.08868 6.67745 2.73427C6.35252 2.45606 5.9927 2.19883 5.5498 2.03098C5.32888 1.9502 5.08588 1.89037 4.81854 1.88844C4.555 1.88372 4.26195 1.94423 4.007 2.09077C3.75412 2.23694 3.55075 2.46075 3.41943 2.69384C3.2864 2.92936 3.21885 3.17312 3.17758 3.40812C3.10198 3.88124 3.14953 4.32485 3.24028 4.74607C3.33518 5.16658 3.47707 5.56191 3.64833 5.94149C3.67665 6.00766 3.70913 6.07312 3.73953 6.13894C3.52303 6.12193 3.30795 6.11328 3.08569 6.12521C2.71666 6.15346 2.336 6.21379 1.95547 6.3881C1.76781 6.47804 1.57782 6.59203 1.40573 6.76106C1.31915 6.84243 1.242 6.94157 1.17284 7.0501C1.13948 7.10523 1.10992 7.15757 1.07839 7.23606C1.06295 7.27094 1.0465 7.31245 1.04448 7.3257L1.01609 7.4101C0.948945 7.66885 0.960808 7.94 1.02584 8.172C1.09021 8.41272 1.20217 8.60665 1.32132 8.77999ZM7.76827 9.23394C7.53573 9.27342 7.28139 9.23488 7.0504 9.14505C6.70321 9.01257 6.38994 8.79045 6.11186 8.53655C5.64914 8.10106 5.26434 7.58352 4.94866 7.03272C4.98158 7.03789 5.01415 7.04096 5.04742 7.04822C5.67298 7.17214 6.29476 7.38704 6.84021 7.73105C7.10723 7.90725 7.36019 8.1138 7.54615 8.36614C7.56566 8.39294 7.58308 8.42009 7.60051 8.44725C7.60679 8.45909 7.61515 8.47057 7.62387 8.48415C7.75847 8.71079 7.83607 8.96647 7.77718 9.21092C7.77444 9.21999 7.77136 9.22696 7.76827 9.23394ZM7.406 4.72271C7.3596 4.88976 7.31978 5.05783 7.28619 5.22485C7.14987 5.91907 7.11889 6.62981 7.22707 7.32983C7.24203 7.43053 7.26323 7.53017 7.28442 7.62982C7.20864 7.56095 7.13322 7.49418 7.054 7.4302C6.50332 6.99244 5.87138 6.66741 5.20351 6.44528C4.99546 6.37737 4.78087 6.32132 4.56528 6.27189C4.33448 5.73035 4.17457 5.16601 4.12203 4.60495C4.08766 4.25159 4.09209 3.90025 4.15801 3.59654C4.22357 3.29074 4.35215 3.06673 4.51762 2.97195C4.67646 2.86325 4.94339 2.85019 5.24195 2.9479C5.53944 3.03935 5.84835 3.21058 6.13215 3.42265C6.60836 3.77411 7.03721 4.22396 7.406 4.72271ZM8.38018 8.82461C8.15754 8.74627 7.98329 8.56292 7.86084 8.34497C7.85456 8.33313 7.84792 8.3192 7.84164 8.30736C7.82629 8.27986 7.81266 8.24991 7.79903 8.21996C7.66937 7.9344 7.6185 7.60966 7.5964 7.29078C7.5685 6.66101 7.68361 6.03062 7.87506 5.43459C8.17503 5.95578 8.41388 6.51962 8.54377 7.10841C8.61733 7.47877 8.65631 7.85931 8.59862 8.224C8.56453 8.43842 8.49373 8.65047 8.38018 8.82461ZM8.66186 8.86067C8.76984 8.67887 8.83998 8.47553 8.87898 8.27748C8.96351 7.86952 8.95901 7.45302 8.90746 7.0488C8.80817 6.23758 8.5407 5.45491 8.16922 4.72647C8.16644 4.72264 8.1633 4.71672 8.16259 4.71254C8.33079 4.35705 8.53232 4.02171 8.76449 3.72849C8.95085 3.49251 9.16365 3.28646 9.38022 3.1529C9.5978 3.01271 9.80263 2.97363 9.92819 3.02114C10.0578 3.05505 10.2028 3.19175 10.3246 3.41841C10.4457 3.6409 10.5303 3.9255 10.5866 4.21922C10.6964 4.81572 10.6846 5.46299 10.5536 6.10038L10.5539 6.10247C10.4232 6.72906 10.2211 7.35056 9.89032 7.90573C9.72109 8.17966 9.51681 8.43589 9.26237 8.6232C9.08389 8.7546 8.87132 8.84876 8.66186 8.86067ZM2.14174 8.21482C2.0044 7.99724 1.95858 7.80284 1.9944 7.67416C2.01635 7.53923 2.14935 7.37899 2.37878 7.2583C2.60163 7.13658 2.88591 7.04959 3.18145 7.00371C3.50534 6.94871 3.84464 6.93412 4.18684 6.94915C4.20426 6.9763 4.21961 7.0038 4.23669 7.02887L4.23704 7.03096C4.68209 7.71464 5.228 8.33819 5.89137 8.81058C6.22202 9.04696 6.57747 9.25331 6.96861 9.38047C7.17874 9.44804 7.41439 9.48976 7.64531 9.47851C7.52893 9.63592 7.35804 9.76173 7.17139 9.84504C6.88382 9.9756 6.56165 10.0282 6.24104 10.0396C5.59632 10.0544 4.9548 9.9246 4.34731 9.73093L4.35181 9.73231C3.7353 9.53588 3.16784 9.22572 2.70634 8.83519C2.47942 8.64358 2.27665 8.43066 2.14174 8.21482Z" fill="url(#paint11_linear_1_662)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_662" x1="1.6495" y1="10.4967" x2="3.7495" y2="14.5252" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1_662" x1="3.92803" y1="8.54145" x2="5.34123" y2="10.4026" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1_662" x1="9.28727" y1="6.41205" x2="15.2125" y2="11.7296" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_1_662" x1="9.00053" y1="5.62147" x2="11.1182" y2="6.53583" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint4_linear_1_662" x1="10.4462" y1="8.71649" x2="19.5729" y2="14.6339" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint5_linear_1_662" x1="3.81651" y1="13.9586" x2="10.1109" y2="20.9303" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint6_linear_1_662" x1="2.06871" y1="12.3236" x2="3.86428" y2="16.1649" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint7_linear_1_662" x1="8.66954" y1="5.50443" x2="13.7855" y2="10.7127" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint8_linear_1_662" x1="8.2874" y1="9.58708" x2="9.53043" y2="10.2089" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint9_linear_1_662" x1="9.02386" y1="10.8517" x2="10.5385" y2="11.5379" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint10_linear_1_662" x1="10.1116" y1="12.601" x2="14.4001" y2="13.9481" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint11_linear_1_662" x1="0.5723" y1="2.5809" x2="9.38747" y2="11.9278" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span style={{ fontSize: '0.8125rem' }}>Friends Birthdays</span>
                                
                            </div>
                            <div className="flex flex-wrap justify-around my-1">
                                <div>
                                    <img className="card-bd-image" src="/imgaes/bdc.png" alt="birthday-picture" />
                                </div>
                                <div className="flex flex-col">
                                    <p style={{ fontSize: '0.875rem'}}>Kevin Alexandar</p>
                                    <p className="username" style={{ fontSize: '0.8125rem' }}>@kevinalexa123</p>
                                    <p style={{ fontSize: '0.8125rem' }}>19 years old</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="profile-info card bg-base-100 shadow-xl card-bg-lblue mx-8 flex flex-col p-2">
                
                <p className="font-poppins tt my-2 mx-2">Trending</p>

                <div className="flex flex-wrap my-1 mx-2">
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.5523 7.1775L8.99977 2.625L4.44727 7.1775" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 15.3749V2.75244" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="hashtag">#FienArtCo</span>
                </div>
                <HorizontalDevider />
                <div className="flex flex-wrap my-1 mx-2">
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.5523 7.1775L8.99977 2.625L4.44727 7.1775" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 15.3749V2.75244" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="hashtag">#HappyNewYear</span>
                </div>

            </div>

            <div className="profile-info card bg-base-100 shadow-xl card-bg-lblue mx-8 my-4 flex flex-col p-2">
                <div className="flex flex-wrap m-2">
                    <p className="mr-2">People You May Know</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM15.7692 8.75721C15.7692 8.86712 15.7256 8.97253 15.6478 9.05025C15.5701 9.12797 15.4647 9.17163 15.3548 9.17163H12.4923C12.4103 9.17177 12.3301 9.14754 12.2619 9.10204C12.1937 9.05653 12.1406 8.99179 12.1092 8.91603C12.0778 8.84027 12.0697 8.75691 12.0857 8.67651C12.1018 8.5961 12.1414 8.52229 12.1995 8.46442L13.2654 7.39856L12.9962 7.08558C12.5146 6.58563 11.9166 6.21281 11.2557 6.00045C10.5949 5.78809 9.89165 5.7428 9.20899 5.86865C8.52633 5.99449 7.88549 6.28753 7.34377 6.72158C6.80205 7.15563 6.37632 7.71715 6.10466 8.35595C5.833 8.99475 5.72387 9.69091 5.78702 10.3822C5.85017 11.0735 6.08364 11.7383 6.46656 12.3173C6.84947 12.8963 7.36989 13.3714 7.9813 13.7001C8.5927 14.0288 9.27603 14.2009 9.97019 14.201C10.8389 14.2002 11.6861 13.9306 12.3956 13.4292C13.105 12.9278 13.642 12.2191 13.9327 11.4005C13.9664 11.3051 14.0185 11.2174 14.0861 11.1422C14.1537 11.067 14.2355 11.0059 14.3267 10.9623C14.4179 10.9187 14.5168 10.8935 14.6178 10.8881C14.7188 10.8828 14.8198 10.8973 14.9151 10.931C15.0105 10.9647 15.0982 11.0168 15.1734 11.0844C15.2486 11.152 15.3098 11.2338 15.3534 11.325C15.3969 11.4162 15.4221 11.5152 15.4275 11.6161C15.4329 11.7171 15.4183 11.8181 15.3846 11.9135C15.034 12.9057 14.4174 13.7825 13.6021 14.4479C12.7869 15.1134 11.8044 15.5419 10.7621 15.6867C9.71974 15.8315 8.65765 15.687 7.69189 15.269C6.72612 14.851 5.89386 14.1755 5.28606 13.3164C4.67825 12.4573 4.3183 11.4477 4.24554 10.3978C4.17278 9.34801 4.39001 8.29838 4.8735 7.36366C5.35698 6.42894 6.08811 5.64512 6.98697 5.09785C7.88583 4.55059 8.91784 4.26094 9.97019 4.26058C10.7469 4.25761 11.5159 4.41369 12.23 4.71921C12.944 5.02472 13.588 5.4732 14.1221 6.03702L14.149 6.06683L14.3562 6.30721L15.062 5.60144C15.0996 5.56299 15.1445 5.53239 15.194 5.51143C15.2435 5.49046 15.2967 5.47955 15.3505 5.47933C15.4052 5.47888 15.4595 5.48929 15.5101 5.50996C15.5608 5.53062 15.6069 5.56113 15.6457 5.59971C15.6845 5.63829 15.7153 5.68419 15.7362 5.73475C15.7572 5.7853 15.7679 5.83951 15.7678 5.89423L15.7692 8.75721Z" fill="url(#paint0_linear_1_570)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_570" x1="2.5" y1="16.5" x2="22.3783" y2="2.41671" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9D8E84" />
                                <stop offset="1" stop-color="#45074F" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <HorizontalDevider />
                <div className="mt-2">
                    <div className="flex flex-wrap justify-around my-2">
                        <YouMayKnowCard />
                        <YouMayKnowCard />
                    </div>
                    <div className="flex flex-wrap justify-around my-2">
                        <YouMayKnowCard />
                        <YouMayKnowCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLeftSideBar;