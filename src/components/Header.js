import { useLocation } from "react-router-dom";
import accountImg from "../assets/images/accountImg.png";

const Header = () => {
  const location = useLocation();
  const locationPath = location.pathname;

  return (
    <header
      className={`px-6 py-8 md:h-28 bg-white ${
        locationPath === "/dashboard" ? "h-[200px]" : "h-[300px]"
      }`}
    >
      {/* mobile logo-account */}
      <div className="md:hidden flex justify-between items-start mb-7">
        <div className="flex flex-col gap-y-7">
          <div
            className={`${
              locationPath !== "/dashboard" ? "hidden" : ""
            } flex flex-col gap-y-1`}
          >
            <span className="block h-0.5 w-6 bg-gray-600"></span>
            <span className="block h-0.5 w-6 bg-gray-600"></span>
            <span className="block h-0.5 w-6 bg-gray-600"></span>
          </div>
          <span>
            <svg
              width="103"
              height="20"
              viewBox="0 0 103 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.728 19V1.12H3.848L10.544 10.216H9.056L15.608 1.12H18.728V19H15.44V4.84L16.712 5.152L9.92 14.2H9.536L2.912 5.152L3.992 4.84V19H0.728ZM30.9579 19.288C29.6459 19.288 28.4219 19.056 27.2859 18.592C26.1499 18.128 25.1579 17.48 24.3099 16.648C23.4619 15.816 22.7979 14.84 22.3179 13.72C21.8539 12.584 21.6219 11.36 21.6219 10.048C21.6219 8.72 21.8539 7.496 22.3179 6.376C22.7819 5.256 23.4379 4.28 24.2859 3.448C25.1339 2.616 26.1259 1.976 27.2619 1.528C28.3979 1.064 29.6299 0.831999 30.9579 0.831999C32.2859 0.831999 33.5179 1.064 34.6539 1.528C35.7899 1.992 36.7819 2.64 37.6299 3.472C38.4779 4.288 39.1339 5.256 39.5979 6.376C40.0779 7.496 40.3179 8.72 40.3179 10.048C40.3179 11.36 40.0779 12.584 39.5979 13.72C39.1179 14.84 38.4539 15.816 37.6059 16.648C36.7579 17.48 35.7659 18.128 34.6299 18.592C33.5099 19.056 32.2859 19.288 30.9579 19.288ZM30.9579 16.312C31.8379 16.312 32.6459 16.16 33.3819 15.856C34.1179 15.536 34.7579 15.096 35.3019 14.536C35.8619 13.976 36.2859 13.312 36.5739 12.544C36.8779 11.776 37.0299 10.944 37.0299 10.048C37.0299 9.152 36.8779 8.328 36.5739 7.576C36.2859 6.808 35.8619 6.144 35.3019 5.584C34.7579 5.008 34.1179 4.568 33.3819 4.264C32.6459 3.96 31.8379 3.808 30.9579 3.808C30.0939 3.808 29.2939 3.96 28.5579 4.264C27.8219 4.568 27.1739 5.008 26.6139 5.584C26.0699 6.144 25.6459 6.808 25.3419 7.576C25.0379 8.328 24.8859 9.152 24.8859 10.048C24.8859 10.944 25.0379 11.776 25.3419 12.544C25.6459 13.312 26.0699 13.976 26.6139 14.536C27.1739 15.096 27.8219 15.536 28.5579 15.856C29.2939 16.16 30.0939 16.312 30.9579 16.312ZM43.2202 19V1.12H49.8682C51.0842 1.12 52.1562 1.344 53.0842 1.792C54.0282 2.224 54.7642 2.864 55.2922 3.712C55.8202 4.544 56.0842 5.56 56.0842 6.76C56.0842 7.992 55.7882 9.04 55.1962 9.904C54.6202 10.768 53.8362 11.408 52.8442 11.824L56.9482 19H53.2522L48.8602 11.152L50.9722 12.4H46.4842V19H43.2202ZM46.4842 9.52H49.9162C50.5082 9.52 51.0202 9.408 51.4522 9.184C51.8842 8.944 52.2202 8.616 52.4602 8.2C52.7002 7.784 52.8202 7.304 52.8202 6.76C52.8202 6.2 52.7002 5.72 52.4602 5.32C52.2202 4.904 51.8842 4.584 51.4522 4.36C51.0202 4.12 50.5082 4 49.9162 4H46.4842V9.52ZM59.0874 19V1.12H70.9674V4H62.3514V8.584H70.4874V11.464H62.3514V16.12H70.9674V19H59.0874ZM73.3608 19V1.12H75.9048L85.7448 14.368L84.4248 14.632V1.12H87.6888V19H85.1208L75.4248 5.656L76.6248 5.392V19H73.3608ZM94.3179 19V4H89.6859V1.12H102.166V4H97.6059V19H94.3179Z"
                fill="#3563E9"
              />
            </svg>
          </span>
        </div>
        <div className="w-7 h-7">
          <img src={accountImg} alt="account" className="w-full h-full" />
        </div>
      </div>
      {/* mobile search-filter */}
      <div className="flex justify-between items-center gap-x-4">
        <div className="md:hidden border border-borderColor rounded-lg px-6 py-3 flex flex-1 items-center">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            className="text-secondary ml-1 text-sm border-none outline-none cursor-pointer"
            placeholder="Search something here"
          />
        </div>
        <div className="md:hidden w-12 h-12 border border-borderColor rounded-lg flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6.5H16"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6.5H2"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 17.5H18"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 17.5H2"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* desktop top bar */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-5">
          {/* logo */}
          <span>
            <svg
              className="w-[103px] h-[20px] md:w-[148px] md:h-[44px]"
              viewBox="0 0 103 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.728 19V1.12H3.848L10.544 10.216H9.056L15.608 1.12H18.728V19H15.44V4.84L16.712 5.152L9.92 14.2H9.536L2.912 5.152L3.992 4.84V19H0.728ZM30.9579 19.288C29.6459 19.288 28.4219 19.056 27.2859 18.592C26.1499 18.128 25.1579 17.48 24.3099 16.648C23.4619 15.816 22.7979 14.84 22.3179 13.72C21.8539 12.584 21.6219 11.36 21.6219 10.048C21.6219 8.72 21.8539 7.496 22.3179 6.376C22.7819 5.256 23.4379 4.28 24.2859 3.448C25.1339 2.616 26.1259 1.976 27.2619 1.528C28.3979 1.064 29.6299 0.831999 30.9579 0.831999C32.2859 0.831999 33.5179 1.064 34.6539 1.528C35.7899 1.992 36.7819 2.64 37.6299 3.472C38.4779 4.288 39.1339 5.256 39.5979 6.376C40.0779 7.496 40.3179 8.72 40.3179 10.048C40.3179 11.36 40.0779 12.584 39.5979 13.72C39.1179 14.84 38.4539 15.816 37.6059 16.648C36.7579 17.48 35.7659 18.128 34.6299 18.592C33.5099 19.056 32.2859 19.288 30.9579 19.288ZM30.9579 16.312C31.8379 16.312 32.6459 16.16 33.3819 15.856C34.1179 15.536 34.7579 15.096 35.3019 14.536C35.8619 13.976 36.2859 13.312 36.5739 12.544C36.8779 11.776 37.0299 10.944 37.0299 10.048C37.0299 9.152 36.8779 8.328 36.5739 7.576C36.2859 6.808 35.8619 6.144 35.3019 5.584C34.7579 5.008 34.1179 4.568 33.3819 4.264C32.6459 3.96 31.8379 3.808 30.9579 3.808C30.0939 3.808 29.2939 3.96 28.5579 4.264C27.8219 4.568 27.1739 5.008 26.6139 5.584C26.0699 6.144 25.6459 6.808 25.3419 7.576C25.0379 8.328 24.8859 9.152 24.8859 10.048C24.8859 10.944 25.0379 11.776 25.3419 12.544C25.6459 13.312 26.0699 13.976 26.6139 14.536C27.1739 15.096 27.8219 15.536 28.5579 15.856C29.2939 16.16 30.0939 16.312 30.9579 16.312ZM43.2202 19V1.12H49.8682C51.0842 1.12 52.1562 1.344 53.0842 1.792C54.0282 2.224 54.7642 2.864 55.2922 3.712C55.8202 4.544 56.0842 5.56 56.0842 6.76C56.0842 7.992 55.7882 9.04 55.1962 9.904C54.6202 10.768 53.8362 11.408 52.8442 11.824L56.9482 19H53.2522L48.8602 11.152L50.9722 12.4H46.4842V19H43.2202ZM46.4842 9.52H49.9162C50.5082 9.52 51.0202 9.408 51.4522 9.184C51.8842 8.944 52.2202 8.616 52.4602 8.2C52.7002 7.784 52.8202 7.304 52.8202 6.76C52.8202 6.2 52.7002 5.72 52.4602 5.32C52.2202 4.904 51.8842 4.584 51.4522 4.36C51.0202 4.12 50.5082 4 49.9162 4H46.4842V9.52ZM59.0874 19V1.12H70.9674V4H62.3514V8.584H70.4874V11.464H62.3514V16.12H70.9674V19H59.0874ZM73.3608 19V1.12H75.9048L85.7448 14.368L84.4248 14.632V1.12H87.6888V19H85.1208L75.4248 5.656L76.6248 5.392V19H73.3608ZM94.3179 19V4H89.6859V1.12H102.166V4H97.6059V19H94.3179Z"
                fill="#3563E9"
              />
            </svg>
          </span>
          {/* search */}
          <div className="flex justify-between items-center border border-borderColor rounded-3xl px-3 py-2 gap-x-2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="w-56 text-sm text-secondary flex-1">
              Search something here
            </span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 6.5H16"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6.5H2"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 17.5H18"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 17.5H2"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <ul className="flex justify-between items-center flex-row-reverse gap-x-5">
          <li className="w-11 h-11">
            <img src={accountImg} alt="account" className="w-full h-full" />
          </li>
          <li className="w-11 h-11 rounded-full border border-borderColor flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1 9.22043C18.29 9.22043 17.55 7.94042 18.45 6.37042C18.97 5.46042 18.66 4.30042 17.75 3.78042L16.02 2.79042C15.23 2.32042 14.21 2.60042 13.74 3.39042L13.63 3.58042C12.73 5.15042 11.25 5.15042 10.34 3.58042L10.23 3.39042C9.78 2.60042 8.76 2.32042 7.97 2.79042L6.24 3.78042C5.33 4.30042 5.02 5.47042 5.54 6.38042C6.45 7.94042 5.71 9.22043 3.9 9.22043C2.86 9.22043 2 10.0704 2 11.1204V12.8804C2 13.9204 2.85 14.7804 3.9 14.7804C5.71 14.7804 6.45 16.0604 5.54 17.6304C5.02 18.5404 5.33 19.7004 6.24 20.2204L7.97 21.2104C8.76 21.6804 9.78 21.4004 10.25 20.6104L10.36 20.4204C11.26 18.8504 12.74 18.8504 13.65 20.4204L13.76 20.6104C14.23 21.4004 15.25 21.6804 16.04 21.2104L17.77 20.2204C18.68 19.7004 18.99 18.5304 18.47 17.6304C17.56 16.0604 18.3 14.7804 20.11 14.7804C21.15 14.7804 22.01 13.9304 22.01 12.8804V11.1204C22 10.0804 21.15 9.22043 20.1 9.22043ZM12 15.2504C10.21 15.2504 8.75 13.7904 8.75 12.0004C8.75 10.2104 10.21 8.75042 12 8.75042C13.79 8.75042 15.25 10.2104 15.25 12.0004C15.25 13.7904 13.79 15.2504 12 15.2504Z"
                fill="#596780"
              />
            </svg>
          </li>
          <li className="w-11 h-11 rounded-full border border-borderColor flex justify-center items-center relative">
            <span className="rounded-full bg-red-600 w-3 h-3 absolute top-0 right-0"></span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
                fill="#596780"
              />
              <path
                d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
                fill="#596780"
              />
            </svg>
          </li>
          <li className="w-11 h-11 rounded-full border border-borderColor flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z"
                fill="#596780"
              />
            </svg>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
