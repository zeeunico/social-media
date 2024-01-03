import "./sidebar.css"
function LeftSideBarIcons(){
    return(
        <div className="hidden h-full w-24 md:flex flex-col items-center fixed overflow-auto sidebar-menu">
            <div className="my-4">
                <button className="btn btn-circle bg-btn-black active-btn border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8606 18.6073C16.3876 18.6073 17.6305 19.8742 17.6305 21.4314V25.4363C17.6305 25.771 17.8918 26.0392 18.2266 26.047H20.644C22.549 26.047 24.0976 24.4768 24.0976 22.5472V11.1885C24.0887 10.5245 23.7805 9.89949 23.2516 9.48415L14.8898 2.63819C13.7673 1.72549 12.1972 1.72549 11.0709 2.6408L2.76615 9.48155C2.21698 9.90991 1.90878 10.5349 1.90244 11.2106V22.5472C1.90244 24.4768 3.45102 26.047 5.356 26.047H7.7962C8.1399 26.047 8.41893 25.7671 8.41893 25.4233C8.41893 25.3478 8.4278 25.2723 8.44302 25.2007V21.4314C8.44302 19.8833 9.67834 18.6177 11.194 18.6073H14.8606ZM20.644 28H18.2038C16.8061 27.9661 15.7281 26.8399 15.7281 25.4363V21.4314C15.7281 20.9509 15.3387 20.5603 14.8606 20.5603H11.2003C10.7323 20.5629 10.3455 20.9548 10.3455 21.4314V25.4233C10.3455 25.521 10.3328 25.6147 10.3061 25.7033C10.1692 26.9922 9.0962 28 7.7962 28H5.356C2.40215 28 0 25.5535 0 22.5472V11.2015C0.0126829 9.9073 0.593561 8.72247 1.59678 7.94257L9.88507 1.11354C11.7101 -0.370746 14.2531 -0.370746 16.0743 1.11094L24.4222 7.94648C25.4026 8.71336 25.9835 9.89558 26 11.1742V22.5472C26 25.5535 23.5979 28 20.644 28Z" fill="white" stroke="white" strokeWidth="0.857161" />
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Home</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" fill="none">
                <path d="M9.99419 20.2558C11.3409 20.2543 12.6319 19.7186 13.5842 18.7663C14.5364 17.8141 15.0721 16.523 15.0737 15.1763C15.0737 15.1761 15.0737 15.1759 15.0737 15.1756M9.99419 20.2558L4.27979 6.6046C4.27979 5.08903 4.88184 3.63554 5.9535 2.56387C7.02515 1.4922 8.47863 0.890137 9.99419 0.890137C11.5097 0.890137 12.9632 1.4922 14.0349 2.56387C15.1065 3.63554 15.7086 5.08903 15.7086 6.6046V15.1763L15.0737 15.1756M9.99419 20.2558C8.64752 20.2543 7.35645 19.7186 6.4042 18.7663C5.45187 17.814 4.9162 16.5228 4.91471 15.176M9.99419 20.2558L4.91471 15.176M15.0737 15.1756L15.0737 6.6046C15.0737 5.25742 14.5385 3.96542 13.5859 3.01282C12.6333 2.06022 11.3413 1.52506 9.99419 1.52506C8.64703 1.52506 7.35505 2.06022 6.40246 3.01282C5.44987 3.96542 4.91471 5.25742 4.91471 6.6046V15.176M15.0737 15.1756L4.91471 15.176" stroke="white" strokeWidth="1.26985"/>
                <path d="M9.0022 24.6857V25.062V26.6049V27.0335H8.57362H4.28782C4.15649 27.0335 4.02646 27.0594 3.90513 27.1096C3.7838 27.1599 3.67356 27.2335 3.5807 27.3264C3.48784 27.4193 3.41418 27.5295 3.36392 27.6508C3.31366 27.7722 3.2878 27.9022 3.2878 28.0335C3.2878 28.1649 3.31366 28.2949 3.36392 28.4162C3.41418 28.5376 3.48784 28.6478 3.5807 28.7407C3.67356 28.8335 3.7838 28.9072 3.90513 28.9575C4.02646 29.0077 4.15649 29.0336 4.28782 29.0336H15.7166C15.8479 29.0336 15.978 29.0077 16.0993 28.9575C16.2206 28.9072 16.3309 28.8335 16.4237 28.7407C16.5166 28.6478 16.5903 28.5376 16.6405 28.4162C16.6908 28.2949 16.7166 28.1649 16.7166 28.0335C16.7166 27.9022 16.6908 27.7722 16.6405 27.6508C16.5903 27.5295 16.5166 27.4193 16.4237 27.3264C16.3309 27.2335 16.2206 27.1599 16.0993 27.1096C15.978 27.0594 15.8479 27.0335 15.7166 27.0335H11.4308H11.0022V26.6049V25.062V24.6925L11.3677 24.6381C16.0314 23.9437 19.5655 19.9724 19.5738 15.1772C19.5738 15.1769 19.5738 15.1767 19.5738 15.1765M9.0022 24.6857L8.51886 25.0549C6.15263 24.6985 3.99243 23.506 2.42993 21.6936C0.867432 19.8812 0.00606832 17.5689 0.00201416 15.176V12.3188C0.00201416 11.9399 0.152527 11.5765 0.420442 11.3086C0.688356 11.0407 1.05173 10.8901 1.43062 10.8901C1.8095 10.8901 2.17287 11.0407 2.44079 11.3086C2.7087 11.5765 2.85922 11.9399 2.85922 12.3188V15.176C2.85922 17.0705 3.61178 18.8873 4.95135 20.2269C6.29093 21.5665 8.10778 22.3191 10.0022 22.3191C11.8967 22.3191 13.7135 21.5665 15.0531 20.2269C16.3927 18.8873 17.1452 17.0705 17.1452 15.176V12.3188C17.1452 11.9399 17.2957 11.5765 17.5637 11.3086C17.8316 11.0407 18.1949 10.8901 18.5738 10.8901C18.9527 10.8901 19.3161 11.0407 19.584 11.3086C19.8519 11.5765 20.0024 11.9399 20.0024 12.3188V15.176V15.1772L19.5738 15.1765M9.0022 24.6857L8.62906 24.637L8.57855 24.6304M9.0022 24.6857L0.430594 15.1756M19.5738 15.1765L19.5738 15.176V12.3188C19.5738 12.0535 19.4685 11.7992 19.2809 11.6116C19.0934 11.4241 18.839 11.3187 18.5738 11.3187C18.3086 11.3187 18.0542 11.4241 17.8667 11.6116C17.6792 11.7992 17.5738 12.0535 17.5738 12.3188V15.176C17.5738 17.1841 16.7761 19.11 15.3561 20.53C13.9362 21.9499 12.0103 22.7477 10.0022 22.7477C7.99411 22.7477 6.06825 21.9499 4.6483 20.53C3.22835 19.11 2.43064 17.1841 2.43064 15.176V12.3188C2.43064 12.0535 2.32528 11.7992 2.13773 11.6116C1.95019 11.4241 1.69584 11.3187 1.43062 11.3187C1.16539 11.3187 0.911036 11.4241 0.723495 11.6116C0.535955 11.7992 0.430594 12.0535 0.430594 12.3188V15.1756M19.5738 15.1765L0.430594 15.1756M0.430594 15.1756C0.430594 15.1755 0.430594 15.1754 0.430594 15.1753L0.00215491 15.176H0.430594V15.1756ZM0.430594 15.1756C0.434562 17.466 1.25903 19.6791 2.75453 21.4137C4.24921 23.1474 6.31528 24.2885 8.57855 24.6304M8.57855 24.6304L8.5743 24.6299L8.51886 25.0549L8.58269 24.6311C8.58131 24.6309 8.57993 24.6307 8.57855 24.6304Z" stroke="white" strokeWidth="0.857161"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Casts</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.7402V4.67019C22 3.47019 21.02 2.58019 19.83 2.68019H19.77C17.67 2.86019 14.48 3.93019 12.7 5.05019L12.53 5.16019C12.24 5.34019 11.76 5.34019 11.47 5.16019L11.22 5.01019C9.44 3.90019 6.26 2.84019 4.16 2.67019C2.97 2.57019 2 3.47019 2 4.66019V16.7402C2 17.7002 2.78 18.6002 3.74 18.7202L4.03 18.7602C6.2 19.0502 9.55 20.1502 11.47 21.2002L11.51 21.2202C11.78 21.3702 12.21 21.3702 12.47 21.2202C14.39 20.1602 17.75 19.0502 19.93 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5.49023V20.4902" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 8.49023H5.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 11.4902H5.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Academy</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                <mask id="path-1-inside-1_9_2276" fill="white">
                    <path d="M5.8733 1.02666C6.04365 0.827496 6.25513 0.667599 6.49318 0.557971C6.73123 0.448342 6.9902 0.391584 7.25229 0.391602H22.7477C23.0098 0.391584 23.2688 0.448342 23.5068 0.557971C23.7449 0.667599 23.9563 0.827496 24.1267 1.02666L28.8606 6.54986C29.2833 7.04308 29.5156 7.67121 29.5156 8.32076V8.78345C29.5157 9.68156 29.2352 10.5573 28.7133 11.2882C28.1914 12.0191 27.4542 12.5686 26.6047 12.8601C25.7551 13.1515 24.8358 13.1702 23.9751 12.9136C23.1144 12.657 22.3554 12.138 21.8042 11.4289C21.4016 11.9474 20.8858 12.3669 20.2961 12.6553C19.7064 12.9437 19.0585 13.0934 18.4021 13.0928C17.7456 13.0935 17.0977 12.9439 16.508 12.6555C15.9183 12.3671 15.4025 11.9475 15 11.4289C14.5975 11.9475 14.0817 12.3671 13.492 12.6555C12.9023 12.9439 12.2544 13.0935 11.5979 13.0928C10.9414 13.0935 10.2935 12.9439 9.70382 12.6555C9.11411 12.3671 8.59826 11.9475 8.1958 11.4289C7.64455 12.138 6.88555 12.657 6.02487 12.9136C5.1642 13.1702 4.24486 13.1515 3.39535 12.8601C2.54583 12.5686 1.8086 12.0191 1.28669 11.2882C0.764784 10.5573 0.484276 9.68156 0.484375 8.78345V8.32076C0.484398 7.67121 0.716728 7.04308 1.13939 6.54986L5.8733 1.02666ZM9.10303 8.78345C9.10303 9.44513 9.36588 10.0797 9.83376 10.5476C10.3016 11.0155 10.9362 11.2783 11.5979 11.2783C12.2596 11.2783 12.8942 11.0155 13.362 10.5476C13.8299 10.0797 14.0928 9.44513 14.0928 8.78345C14.0928 8.54284 14.1884 8.31208 14.3585 8.14194C14.5286 7.9718 14.7594 7.87622 15 7.87622C15.2406 7.87622 15.4714 7.9718 15.6415 8.14194C15.8116 8.31208 15.9072 8.54284 15.9072 8.78345C15.9072 9.44513 16.1701 10.0797 16.638 10.5476C17.1058 11.0155 17.7404 11.2783 18.4021 11.2783C19.0638 11.2783 19.6984 11.0155 20.1662 10.5476C20.6341 10.0797 20.897 9.44513 20.897 8.78345C20.897 8.54284 20.9926 8.31208 21.1627 8.14194C21.3328 7.9718 21.5636 7.87622 21.8042 7.87622C22.0448 7.87622 22.2756 7.9718 22.4457 8.14194C22.6158 8.31208 22.7114 8.54284 22.7114 8.78345C22.7114 9.44513 22.9743 10.0797 23.4422 10.5476C23.91 11.0155 24.5446 11.2783 25.2063 11.2783C25.868 11.2783 26.5026 11.0155 26.9704 10.5476C27.4383 10.0797 27.7012 9.44513 27.7012 8.78345V8.32076C27.7012 8.10453 27.624 7.8954 27.4834 7.73106L22.7477 2.20605H7.25229L2.51656 7.73106C2.37603 7.8954 2.29881 8.10453 2.29883 8.32076V8.78345C2.29883 9.44513 2.56168 10.0797 3.02956 10.5476C3.49744 11.0155 4.13202 11.2783 4.7937 11.2783C5.45538 11.2783 6.08996 11.0155 6.55784 10.5476C7.02572 10.0797 7.28857 9.44513 7.28857 8.78345C7.28857 8.54284 7.38416 8.31208 7.5543 8.14194C7.72443 7.9718 7.95519 7.87622 8.1958 7.87622C8.43641 7.87622 8.66717 7.9718 8.83731 8.14194C9.00745 8.31208 9.10303 8.54284 9.10303 8.78345ZM3.20605 14C3.44667 14 3.67742 14.0956 3.84756 14.2657C4.0177 14.4359 4.11328 14.6666 4.11328 14.9072V25.7939H5.92773V16.7217C5.92773 16.2405 6.1189 15.7789 6.45918 15.4387C6.79945 15.0984 7.26096 14.9072 7.74219 14.9072H13.1855C13.6668 14.9072 14.1283 15.0984 14.4686 15.4387C14.8088 15.7789 15 16.2405 15 16.7217V25.7939H25.8867V14.9072C25.8867 14.6666 25.9823 14.4359 26.1524 14.2657C26.3226 14.0956 26.5533 14 26.7939 14C27.0346 14 27.2653 14.0956 27.4355 14.2657C27.6056 14.4359 27.7012 14.6666 27.7012 14.9072V25.7939H28.6084C28.849 25.7939 29.0798 25.8895 29.2499 26.0597C29.42 26.2298 29.5156 26.4606 29.5156 26.7012C29.5156 26.9418 29.42 27.1725 29.2499 27.3427C29.0798 27.5128 28.849 27.6084 28.6084 27.6084H1.3916C1.15099 27.6084 0.920234 27.5128 0.750096 27.3427C0.579958 27.1725 0.484375 26.9418 0.484375 26.7012C0.484375 26.4606 0.579958 26.2298 0.750096 26.0597C0.920234 25.8895 1.15099 25.7939 1.3916 25.7939H2.29883V14.9072C2.29883 14.6666 2.39441 14.4359 2.56455 14.2657C2.73469 14.0956 2.96544 14 3.20605 14ZM7.74219 25.7939H13.1855V16.7217H7.74219V25.7939ZM16.8145 16.7217C16.8145 16.2405 17.0056 15.7789 17.3459 15.4387C17.6862 15.0984 18.1477 14.9072 18.6289 14.9072H22.2578C22.739 14.9072 23.2005 15.0984 23.5408 15.4387C23.8811 15.7789 24.0723 16.2405 24.0723 16.7217V22.165C24.0723 22.6463 23.8811 23.1078 23.5408 23.448C23.2005 23.7883 22.739 23.9795 22.2578 23.9795H18.6289C18.1477 23.9795 17.6862 23.7883 17.3459 23.448C17.0056 23.1078 16.8145 22.6463 16.8145 22.165V16.7217ZM22.2578 16.7217H18.6289V22.165H22.2578V16.7217Z"/>
                </mask>
                <path d="M5.8733 1.02666C6.04365 0.827496 6.25513 0.667599 6.49318 0.557971C6.73123 0.448342 6.9902 0.391584 7.25229 0.391602H22.7477C23.0098 0.391584 23.2688 0.448342 23.5068 0.557971C23.7449 0.667599 23.9563 0.827496 24.1267 1.02666L28.8606 6.54986C29.2833 7.04308 29.5156 7.67121 29.5156 8.32076V8.78345C29.5157 9.68156 29.2352 10.5573 28.7133 11.2882C28.1914 12.0191 27.4542 12.5686 26.6047 12.8601C25.7551 13.1515 24.8358 13.1702 23.9751 12.9136C23.1144 12.657 22.3554 12.138 21.8042 11.4289C21.4016 11.9474 20.8858 12.3669 20.2961 12.6553C19.7064 12.9437 19.0585 13.0934 18.4021 13.0928C17.7456 13.0935 17.0977 12.9439 16.508 12.6555C15.9183 12.3671 15.4025 11.9475 15 11.4289C14.5975 11.9475 14.0817 12.3671 13.492 12.6555C12.9023 12.9439 12.2544 13.0935 11.5979 13.0928C10.9414 13.0935 10.2935 12.9439 9.70382 12.6555C9.11411 12.3671 8.59826 11.9475 8.1958 11.4289C7.64455 12.138 6.88555 12.657 6.02487 12.9136C5.1642 13.1702 4.24486 13.1515 3.39535 12.8601C2.54583 12.5686 1.8086 12.0191 1.28669 11.2882C0.764784 10.5573 0.484276 9.68156 0.484375 8.78345V8.32076C0.484398 7.67121 0.716728 7.04308 1.13939 6.54986L5.8733 1.02666ZM9.10303 8.78345C9.10303 9.44513 9.36588 10.0797 9.83376 10.5476C10.3016 11.0155 10.9362 11.2783 11.5979 11.2783C12.2596 11.2783 12.8942 11.0155 13.362 10.5476C13.8299 10.0797 14.0928 9.44513 14.0928 8.78345C14.0928 8.54284 14.1884 8.31208 14.3585 8.14194C14.5286 7.9718 14.7594 7.87622 15 7.87622C15.2406 7.87622 15.4714 7.9718 15.6415 8.14194C15.8116 8.31208 15.9072 8.54284 15.9072 8.78345C15.9072 9.44513 16.1701 10.0797 16.638 10.5476C17.1058 11.0155 17.7404 11.2783 18.4021 11.2783C19.0638 11.2783 19.6984 11.0155 20.1662 10.5476C20.6341 10.0797 20.897 9.44513 20.897 8.78345C20.897 8.54284 20.9926 8.31208 21.1627 8.14194C21.3328 7.9718 21.5636 7.87622 21.8042 7.87622C22.0448 7.87622 22.2756 7.9718 22.4457 8.14194C22.6158 8.31208 22.7114 8.54284 22.7114 8.78345C22.7114 9.44513 22.9743 10.0797 23.4422 10.5476C23.91 11.0155 24.5446 11.2783 25.2063 11.2783C25.868 11.2783 26.5026 11.0155 26.9704 10.5476C27.4383 10.0797 27.7012 9.44513 27.7012 8.78345V8.32076C27.7012 8.10453 27.624 7.8954 27.4834 7.73106L22.7477 2.20605H7.25229L2.51656 7.73106C2.37603 7.8954 2.29881 8.10453 2.29883 8.32076V8.78345C2.29883 9.44513 2.56168 10.0797 3.02956 10.5476C3.49744 11.0155 4.13202 11.2783 4.7937 11.2783C5.45538 11.2783 6.08996 11.0155 6.55784 10.5476C7.02572 10.0797 7.28857 9.44513 7.28857 8.78345C7.28857 8.54284 7.38416 8.31208 7.5543 8.14194C7.72443 7.9718 7.95519 7.87622 8.1958 7.87622C8.43641 7.87622 8.66717 7.9718 8.83731 8.14194C9.00745 8.31208 9.10303 8.54284 9.10303 8.78345ZM3.20605 14C3.44667 14 3.67742 14.0956 3.84756 14.2657C4.0177 14.4359 4.11328 14.6666 4.11328 14.9072V25.7939H5.92773V16.7217C5.92773 16.2405 6.1189 15.7789 6.45918 15.4387C6.79945 15.0984 7.26096 14.9072 7.74219 14.9072H13.1855C13.6668 14.9072 14.1283 15.0984 14.4686 15.4387C14.8088 15.7789 15 16.2405 15 16.7217V25.7939H25.8867V14.9072C25.8867 14.6666 25.9823 14.4359 26.1524 14.2657C26.3226 14.0956 26.5533 14 26.7939 14C27.0346 14 27.2653 14.0956 27.4355 14.2657C27.6056 14.4359 27.7012 14.6666 27.7012 14.9072V25.7939H28.6084C28.849 25.7939 29.0798 25.8895 29.2499 26.0597C29.42 26.2298 29.5156 26.4606 29.5156 26.7012C29.5156 26.9418 29.42 27.1725 29.2499 27.3427C29.0798 27.5128 28.849 27.6084 28.6084 27.6084H1.3916C1.15099 27.6084 0.920234 27.5128 0.750096 27.3427C0.579958 27.1725 0.484375 26.9418 0.484375 26.7012C0.484375 26.4606 0.579958 26.2298 0.750096 26.0597C0.920234 25.8895 1.15099 25.7939 1.3916 25.7939H2.29883V14.9072C2.29883 14.6666 2.39441 14.4359 2.56455 14.2657C2.73469 14.0956 2.96544 14 3.20605 14ZM7.74219 25.7939H13.1855V16.7217H7.74219V25.7939ZM16.8145 16.7217C16.8145 16.2405 17.0056 15.7789 17.3459 15.4387C17.6862 15.0984 18.1477 14.9072 18.6289 14.9072H22.2578C22.739 14.9072 23.2005 15.0984 23.5408 15.4387C23.8811 15.7789 24.0723 16.2405 24.0723 16.7217V22.165C24.0723 22.6463 23.8811 23.1078 23.5408 23.448C23.2005 23.7883 22.739 23.9795 22.2578 23.9795H18.6289C18.1477 23.9795 17.6862 23.7883 17.3459 23.448C17.0056 23.1078 16.8145 22.6463 16.8145 22.165V16.7217ZM22.2578 16.7217H18.6289V22.165H22.2578V16.7217Z" fill="#F8F8F8" stroke="#050C36" strokeWidth="0.516699" mask="url(#path-1-inside-1_9_2276)"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Market</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.63 7.15014C18.67 7.76014 18.62 8.45014 18.5 9.22014L17.77 13.9101C17.15 17.8201 15.34 19.1401 11.43 18.5301L6.73999 17.7901C5.38999 17.5801 4.34999 17.2201 3.58999 16.6801C2.13999 15.6701 1.71999 14.0101 2.11999 11.4501L2.85999 6.76014C3.47999 2.85014 5.28999 1.53014 9.19999 2.14014L13.89 2.88014C17.03 3.37014 18.5 4.65014 18.63 7.15014Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5001 13.4699L19.0001 17.9799C17.7501 21.7399 15.7501 22.7399 11.9901 21.4899L7.48009 19.9899C5.21009 19.2399 3.95009 18.1999 3.59009 16.6799C4.35009 17.2199 5.39009 17.5799 6.74009 17.7899L11.4301 18.5299C15.3401 19.1399 17.1501 17.8199 17.7701 13.9099L18.5001 9.2199C18.6201 8.4499 18.6701 7.7599 18.6301 7.1499C21.0201 8.4199 21.5401 10.3399 20.5001 13.4699Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.24 8.98C9.20098 8.98 9.98 8.20098 9.98 7.24C9.98 6.27902 9.20098 5.5 8.24 5.5C7.27902 5.5 6.5 6.27902 6.5 7.24C6.5 8.20098 7.27902 8.98 8.24 8.98Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Pages</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.9702 14.4402C18.3402 14.6702 19.8502 14.4302 20.9102 13.7202C22.3202 12.7802 22.3202 11.2402 20.9102 10.3002C19.8402 9.59016 18.3102 9.35016 16.9402 9.59016" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.99994 14.4402C5.62994 14.6702 4.11994 14.4302 3.05994 13.7202C1.64994 12.7802 1.64994 11.2402 3.05994 10.3002C4.12994 9.59016 5.65994 9.35016 7.02994 9.59016" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.08997 17.7804C7.67997 18.7204 7.67997 20.2603 9.08997 21.2003C10.69 22.2703 13.31 22.2703 14.91 21.2003C16.32 20.2603 16.32 18.7204 14.91 17.7804C13.32 16.7204 10.69 16.7204 9.08997 17.7804Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Groups</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26" fill="none">
  <path d="M27.2412 22.7111H26.8412V23.1111C26.8412 24.4962 25.7518 25.6 24.431 25.6H7.56954C6.24874 25.6 5.1593 24.4962 5.1593 23.1111V22.7111H4.7593H3.35418C2.03338 22.7111 0.943945 21.6073 0.943945 20.2222V5.77778C0.943945 4.39272 2.03338 3.28889 3.35418 3.28889H4.7593H5.1593V2.88889C5.1593 1.50383 6.24874 0.4 7.56954 0.4H24.431C25.7518 0.4 26.8412 1.50383 26.8412 2.88889V3.28889H27.2412H28.6463C29.9671 3.28889 31.0565 4.39272 31.0565 5.77778V20.2222C31.0565 21.6073 29.9671 22.7111 28.6463 22.7111H27.2412ZM24.431 23.5111H24.831V23.1111V2.88889V2.48889H24.431H7.56954H7.16954V2.88889V23.1111V23.5111H7.56954H24.431ZM5.1593 5.77778V5.37778H4.7593H3.35418H2.95418V5.77778V20.2222V20.6222H3.35418H4.7593H5.1593V20.2222V5.77778ZM27.2412 5.37778H26.8412V5.77778V20.2222V20.6222H27.2412H28.6463H29.0463V20.2222V5.77778V5.37778H28.6463H27.2412Z" fill="white" stroke="#050C36" strokeWidth="0.8"/>
  <path d="M20.9473 7.12878C21.6344 7.06966 22.2067 7.13178 21.8681 7.61815C21.8691 7.61689 21.87 7.61564 21.8709 7.61441C21.8715 7.61358 21.8628 7.62578 21.8599 7.62988L21.8607 7.62875C21.8632 7.6252 21.8657 7.62166 21.8681 7.61815C21.836 7.661 21.7759 7.71639 21.7316 7.74357L21.4673 7.9037L20.8768 8.27602L20.8406 8.29889C20.6633 8.41399 20.6492 8.43666 20.6231 8.64636L20.6 8.85497C20.54 9.39876 19.8404 9.46671 19.6498 10.0418L19.5908 10.2198C19.5217 10.4191 19.4893 10.4513 19.2899 10.5199L19.2427 10.5354L18.1927 10.8799L17.1483 11.2452C16.8449 11.3831 16.7016 11.4393 16.6382 11.8216L16.6256 11.908L16.6055 15.4977C16.7183 17.2581 15.0358 19.4677 12.2112 19.1065C10.5506 18.8941 10.151 17.6854 10.2846 16.6411C10.433 15.4801 11.0132 13.9227 13.7586 14.4029L13.8551 14.4152L13.971 14.4404L14.1471 14.478L14.3235 14.5182L14.4312 14.5481C15.1013 14.738 15.7091 15.3714 15.6659 14.1834C15.6659 14.1829 15.666 14.1842 15.6659 14.1837C15.665 14.1607 15.6619 14.1331 15.6575 14.1105L15.6573 14.1096L15.5752 13.6888L14.9976 9.97691C14.7382 8.72408 14.8602 7.64066 16.3227 7.52299L16.8059 7.49025L20.9473 7.12878Z" fill="white"/>
</svg>
                </button>
                <p className="text-center text-sm mt-2 ">Music</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.6599 10.44L20.6799 14.62C19.8399 18.23 18.1799 19.69 15.0599 19.39C14.5599 19.35 14.0199 19.26 13.4399 19.12L11.7599 18.72C7.58994 17.73 6.29994 15.67 7.27994 11.49L8.25994 7.30001C8.45994 6.45001 8.69994 5.71001 8.99994 5.10001C10.1699 2.68001 12.1599 2.03001 15.4999 2.82001L17.1699 3.21001C21.3599 4.19001 22.6399 6.26001 21.6599 10.44Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.0601 19.3901C14.4401 19.8101 13.6601 20.1601 12.7101 20.4701L11.1301 20.9901C7.1601 22.2701 5.0701 21.2001 3.7801 17.2301L2.5001 13.2801C1.2201 9.3101 2.2801 7.2101 6.2501 5.9301L7.8301 5.4101C8.2401 5.2801 8.6301 5.1701 9.0001 5.1001C8.7001 5.7101 8.4601 6.4501 8.2601 7.3001L7.2801 11.4901C6.3001 15.6701 7.5901 17.7301 11.7601 18.7201L13.4401 19.1201C14.0201 19.2601 14.5601 19.3501 15.0601 19.3901Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.6399 8.52979L17.4899 9.75979" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.6599 12.3999L14.5599 13.1399" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Products</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 7H16" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10.5H13" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Blog</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 18.2002C14.2091 18.2002 16 16.4093 16 14.2002C16 11.9911 14.2091 10.2002 12 10.2002C9.79086 10.2002 8 11.9911 8 14.2002C8 16.4093 9.79086 18.2002 12 18.2002Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.4399 14.2998L11.0899 14.9498C11.2799 15.1398 11.5899 15.1398 11.7799 14.9598L13.5599 13.3198" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.00007 22H16.0001C20.0201 22 20.7401 20.39 20.9501 18.43L21.7001 10.43C21.9701 7.99 21.2701 6 17.0001 6H7.00007C2.73007 6 2.03007 7.99 2.30007 10.43L3.05007 18.43C3.26007 20.39 3.98007 22 8.00007 22Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.65 11C19.92 12.26 18 13.14 16.01 13.64" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.62012 11.27C4.29012 12.41 6.11012 13.22 8.00012 13.68" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Jobs</p>
            </div>
            
            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M14.3354 22.4805V25.1872C14.3354 27.4805 12.2021 29.3338 9.57542 29.3338C6.94875 29.3338 4.80206 27.4805 4.80206 25.1872V22.4805C4.80206 24.7738 6.93542 26.4005 9.57542 26.4005C12.2021 26.4005 14.3354 24.7605 14.3354 22.4805Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.3333 18.8135C14.3333 19.4801 14.1466 20.0935 13.8266 20.6268C13.04 21.9201 11.4266 22.7335 9.55996 22.7335C7.69329 22.7335 6.07994 21.9068 5.29327 20.6268C4.97327 20.0935 4.78668 19.4801 4.78668 18.8135C4.78668 17.6668 5.31999 16.6401 6.17332 15.8935C7.03999 15.1335 8.22661 14.6802 9.54661 14.6802C10.8666 14.6802 12.0533 15.1468 12.92 15.8935C13.8 16.6268 14.3333 17.6668 14.3333 18.8135Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.3354 18.8132V22.4798C14.3354 24.7732 12.2021 26.3998 9.57542 26.3998C6.94875 26.3998 4.80206 24.7598 4.80206 22.4798V18.8132C4.80206 16.5198 6.93542 14.6665 9.57542 14.6665C10.8954 14.6665 12.0821 15.1331 12.9488 15.8798C13.8021 16.6265 14.3354 17.6665 14.3354 18.8132Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29.3334 14.6265V17.3733C29.3334 18.1066 28.7467 18.7066 28.0001 18.7332H25.3867C23.9467 18.7332 22.6267 17.6799 22.5067 16.2399C22.4267 15.3999 22.7467 14.6132 23.3067 14.0666C23.8 13.5599 24.48 13.2666 25.2267 13.2666H28.0001C28.7467 13.2933 29.3334 13.8932 29.3334 14.6265Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.66669 13.9998V11.3332C2.66669 7.7065 4.85336 5.17317 8.25336 4.7465C8.60002 4.69317 8.96002 4.6665 9.33335 4.6665H21.3334C21.68 4.6665 22.0134 4.67982 22.3334 4.73315C25.7734 5.13315 28 7.67984 28 11.3332V13.2665H25.2267C24.48 13.2665 23.8 13.5598 23.3067 14.0665C22.7467 14.6132 22.4267 15.3998 22.5067 16.2398C22.6267 17.6798 23.9467 18.7332 25.3867 18.7332H28V20.6665C28 24.6665 25.3334 27.3332 21.3334 27.3332H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Fundings</p>
            </div>

            <div className="my-4">
                <button className="btn btn-circle bg-btn-black border-none text-white mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M17 21.125C19.2782 21.125 21.125 19.2782 21.125 17C21.125 14.7218 19.2782 12.875 17 12.875C14.7218 12.875 12.875 14.7218 12.875 17C12.875 19.2782 14.7218 21.125 17 21.125Z" stroke="white" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.25 18.21V15.79C3.25 14.36 4.41875 13.1775 5.8625 13.1775C8.35125 13.1775 9.36875 11.4175 8.1175 9.25872C7.4025 8.02122 7.82875 6.41247 9.08 5.69747L11.4587 4.33622C12.545 3.68997 13.9475 4.07497 14.5938 5.16122L14.745 5.42247C15.9825 7.58122 18.0175 7.58122 19.2687 5.42247L19.42 5.16122C20.0663 4.07497 21.4688 3.68997 22.555 4.33622L24.9338 5.69747C26.185 6.41247 26.6112 8.02122 25.8962 9.25872C24.645 11.4175 25.6625 13.1775 28.1513 13.1775C29.5813 13.1775 30.7638 14.3462 30.7638 15.79V18.21C30.7638 19.64 29.595 20.8225 28.1513 20.8225C25.6625 20.8225 24.645 22.5825 25.8962 24.7412C26.6112 25.9925 26.185 27.5875 24.9338 28.3025L22.555 29.6637C21.4688 30.31 20.0663 29.925 19.42 28.8387L19.2687 28.5775C18.0312 26.4187 15.9962 26.4187 14.745 28.5775L14.5938 28.8387C13.9475 29.925 12.545 30.31 11.4587 29.6637L9.08 28.3025C7.82875 27.5875 7.4025 25.9787 8.1175 24.7412C9.36875 22.5825 8.35125 20.8225 5.8625 20.8225C4.41875 20.8225 3.25 19.64 3.25 18.21Z" stroke="white" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                <p className="text-center text-sm mt-2 ">Settings</p>
            </div>

            <div className="my-16"></div>
            
        </div>
    );
}
export default LeftSideBarIcons;