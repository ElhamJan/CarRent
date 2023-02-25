import bannerCar from "../assets/images/car.png";
import bannerCar2 from "../assets/images/car2.png";
import { cars } from "../assets/data/cars";

const HomePage = () => {
  return (
    <>
      {/* banner */}
      <div className="grid md:grid-cols-2 gap-x-6 mb-8">
        <div className="bg-blue-400 text-white p-4 rounded-lg mt-[-130px] md:mt-7 bg-banner-bg bg-no-repeat bg-cover">
          <h2 className="mb-2 font-semibold">
            The Best Platform for Car Rental
          </h2>
          <p className="text-sm font-thin mb-4">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="bg-primary py-2 px-1 rounded w-32 mb-5">
            Rental Car
          </button>
          <div className="mx-auto w-48 h-14 xl:w-[406px] xl:h-[116px]">
            <img src={bannerCar} alt="car" />
          </div>
        </div>
        <div className="hidden md:block bg-primary text-white p-4 rounded-lg md:mt-7 bg-banner-bg2 bg-no-repeat bg-cover">
          <h2 className="mb-2 font-semibold">
            Easy way to rent a car at a low price
          </h2>
          <p className="text-sm font-thin mb-4">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <button className="bg-blue-400 py-2 px-1 rounded w-32 mb-5">
            Rental Car
          </button>
          <div className="mx-auto w-40 h-8 xl:w-[340px] xl:h-[108px]">
            <img src={bannerCar2} alt="car" />
          </div>
        </div>
      </div>
      {/* pickup-dropoff */}
      <div className="relative grid md:grid-cols-2 gap-x-36 mb-8">
        <button className="bg-primary rounded-lg p-3 absolute top-[108px] md:top-1/3 left-1/2 md:left-[47%] lg:left-[48%] shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16124 3.83632L7.16124 17.4541"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.0837 7.93262L7.16148 3.83595L11.2393 7.93262"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.089 20.167L17.089 6.54921"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.167 16.0713L17.0892 20.168L13.0114 16.0713"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* pickup */}
        <div className="bg-white rounded-xl p-3 mb-8 md:mb-0">
          <div className="flex items-center gap-x-2 mb-4">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  rx="8"
                  fill="#3563E9"
                  fillOpacity="0.3"
                />
                <circle cx="8" cy="8" r="4" fill="#3563E9" />
              </svg>
            </span>
            <span className="font-semibold text-lg">Pick - Up</span>
          </div>
          <div className="flex items-center justify-center">
            {/* location */}
            <div className="flex flex-col items-center border-r border-r-slate-300 flex-1">
              <span className="font-bold">Locations</span>
              <select
                name="pLocation"
                id="pLocation"
                className="text-sm text-slate-400"
              >
                <option value="1">Semarang</option>
                <option value="2">location2</option>
              </select>
            </div>
            {/* date */}
            <div className="flex flex-col items-center border-r border-r-slate-300 flex-1">
              <span className="font-bold">Date</span>
              <select
                name="pLocation"
                id="pLocation"
                className="text-sm text-slate-400"
              >
                <option value="1">21 July 2022</option>
                <option value="2">10 Apr 2022</option>
              </select>
            </div>
            {/* time */}
            <div className="flex flex-col items-center flex-1">
              <span className="font-bold">Time</span>
              <select
                name="pLocation"
                id="pLocation"
                className="text-sm text-slate-400"
              >
                <option value="1">01.00</option>
                <option value="2">05.30</option>
              </select>
            </div>
          </div>
        </div>
        {/* dropoff */}
        <div className="bg-white rounded-xl p-3">
          <div className="flex items-center gap-x-2 mb-4">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  rx="8"
                  fill="#3563E9"
                  fillOpacity="0.3"
                />
                <circle cx="8" cy="8" r="4" fill="#3563E9" />
              </svg>
            </span>
            <span className="font-semibold text-lg">Drop - Off</span>
          </div>
          <div className="flex items-center justify-between">
            {/* location */}
            <div className="flex flex-col items-center border-r border-r-slate-300 flex-1">
              <span className="font-bold">Locations</span>
              <select
                name="tLocation"
                id="tLocation"
                className="text-sm text-slate-400"
              >
                <option value="1">Semarang</option>
                <option value="2">location2</option>
              </select>
            </div>
            {/* date */}
            <div className="flex flex-col items-center border-r border-r-slate-300 flex-1">
              <span className="font-bold">Date</span>
              <select
                name="tDate"
                id="tDate"
                className="text-sm text-slate-400"
              >
                <option value="1">25 July 2022</option>
                <option value="2">10 Apr 2022</option>
              </select>
            </div>
            {/* time */}
            <div className="flex flex-col items-center flex-1">
              <span className="font-bold">Time</span>
              <select
                name="pLocation"
                id="pLocation"
                className="text-sm text-slate-400"
              >
                <option value="1">01.00</option>
                <option value="2">05.30</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* popular car */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-secondary">Popular car</p>
          <p className="text-sm text-primary font-semibold">View all</p>
        </div>
        <div className="overflow-x-auto mt-4">
          <div className="flex justify-between items-center gap-x-4 flex-1">
            {cars.map((c) => {
              return (
                !c.recommended && (
                  <div key={c.id} className="bg-white rounded-xl flex-1 p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{c.name}</span>
                      <span>
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                            stroke="#90A3BF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="text-secondary text-sm">{c.type}</span>
                    {/* car image */}
                    <div className="my-10 mx-8 w-44 h-14 lg:w-56 lg:h-16 flex items-center justify-center p">
                      <img src={`${c.imageUrl}`} alt={`car${c.id}`} />
                    </div>
                    {/* description */}
                    <div className="flex justify-between items-center text-secondary mb-6">
                      <span className="text-xs flex items-center gap-x-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.032 5.44283L11.8653 4.85949C11.6495 4.75449 11.3812 4.83616 11.2762 5.05199C11.1653 5.27366 11.2528 5.53616 11.4687 5.64116L12.3962 6.10199V8.89616L10.2087 8.90199V2.91699C10.2087 1.75033 9.42699 1.16699 8.45866 1.16699H3.79199C2.82366 1.16699 2.04199 1.75033 2.04199 2.91699V12.3962H1.16699C0.927826 12.3962 0.729492 12.5945 0.729492 12.8337C0.729492 13.0728 0.927826 13.2712 1.16699 13.2712H11.0837C11.3228 13.2712 11.5212 13.0728 11.5212 12.8337C11.5212 12.5945 11.3228 12.3962 11.0837 12.3962H10.2087V9.77699L12.8337 9.77116C13.0787 9.77116 13.2712 9.57283 13.2712 9.33366V5.83366C13.2712 5.67033 13.1778 5.51866 13.032 5.44283ZM3.50033 4.01949C3.50033 3.20866 3.99616 2.91699 4.60283 2.91699H7.65366C8.25449 2.91699 8.75033 3.20866 8.75033 4.01949V4.73699C8.75033 5.54199 8.25449 5.83366 7.64783 5.83366H4.60283C3.99616 5.83366 3.50033 5.54199 3.50033 4.73116V4.01949ZM3.79199 7.14616H5.54199C5.78116 7.14616 5.97949 7.34449 5.97949 7.58366C5.97949 7.82283 5.78116 8.02116 5.54199 8.02116H3.79199C3.55283 8.02116 3.35449 7.82283 3.35449 7.58366C3.35449 7.34449 3.55283 7.14616 3.79199 7.14616Z"
                            fill="#90A3BF"
                          />
                        </svg>
                        {c.gasolineCapacity}
                      </span>
                      <span className="text-xs flex items-center gap-x-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 1C3.688 1 1 3.688 1 7C1 10.312 3.688 13 7 13C10.312 13 13 10.312 13 7C13 3.688 10.318 1 7 1Z"
                            fill="#90A3BF"
                          />
                          <rect
                            x="2"
                            y="2"
                            width="10"
                            height="10"
                            rx="5"
                            fill="white"
                          />
                          <path
                            d="M7 3C4.792 3 3 4.792 3 7C3 9.208 4.792 11 7 11C9.208 11 11 9.208 11 7C11 4.792 9.212 3 7 3Z"
                            fill="#90A3BF"
                          />
                          <rect
                            x="8"
                            y="6"
                            width="4"
                            height="2"
                            fill="#90A3BF"
                          />
                          <rect
                            x="2"
                            y="6"
                            width="4"
                            height="2"
                            fill="#90A3BF"
                          />
                          <rect
                            x="6"
                            y="8"
                            width="2"
                            height="4"
                            fill="#90A3BF"
                          />
                          <rect
                            x="4"
                            y="4"
                            width="6"
                            height="6"
                            rx="3"
                            fill="white"
                          />
                        </svg>
                        {c.steering}
                      </span>
                      <span className="text-xs flex items-center gap-x-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25033 1.16699C3.72199 1.16699 2.47949 2.40949 2.47949 3.93783C2.47949 5.43699 3.65199 6.65033 5.18033 6.70283C5.22699 6.69699 5.27366 6.69699 5.30866 6.70283C5.32033 6.70283 5.32616 6.70283 5.33782 6.70283C5.34366 6.70283 5.34366 6.70283 5.34949 6.70283C6.84282 6.65033 8.01532 5.43699 8.02116 3.93783C8.02116 2.40949 6.77866 1.16699 5.25033 1.16699Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M8.21356 8.25418C6.58605 7.16918 3.93189 7.16918 2.29272 8.25418C1.55189 8.75001 1.14355 9.42085 1.14355 10.1383C1.14355 10.8558 1.55189 11.5208 2.28689 12.0108C3.10355 12.5592 4.17689 12.8333 5.25022 12.8333C6.32355 12.8333 7.39689 12.5592 8.21356 12.0108C8.94855 11.515 9.35689 10.85 9.35689 10.1267C9.35106 9.40918 8.94855 8.74418 8.21356 8.25418Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M11.6605 4.28156C11.7538 5.41323 10.9488 6.4049 9.83464 6.53906C9.8288 6.53906 9.8288 6.53906 9.82297 6.53906H9.80547C9.77047 6.53906 9.73547 6.53906 9.7063 6.55073C9.14047 6.5799 8.6213 6.39906 8.23047 6.06656C8.8313 5.5299 9.17547 4.7249 9.10547 3.8499C9.06464 3.3774 8.9013 2.94573 8.6563 2.57823C8.87797 2.4674 9.13464 2.3974 9.39714 2.37406C10.5405 2.2749 11.5613 3.12656 11.6605 4.28156Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M12.8278 9.67708C12.7811 10.2429 12.4195 10.7329 11.8128 11.0654C11.2295 11.3862 10.4945 11.5379 9.7653 11.5204C10.1853 11.1412 10.4303 10.6687 10.477 10.1671C10.5353 9.44375 10.1911 8.74958 9.5028 8.19541C9.11197 7.88625 8.65697 7.64125 8.16113 7.46041C9.4503 7.08708 11.072 7.33791 12.0695 8.14291C12.6061 8.57458 12.8803 9.11708 12.8278 9.67708Z"
                            fill="#90A3BF"
                          />
                        </svg>
                        {c.capacity}
                      </span>
                    </div>
                    {/* price */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col justify-start">
                        <div>
                          <span className="font-bold">${c.offPrice} /</span>
                          <span className="text-secondary text-sm">day</span>
                        </div>
                        <span
                          className={`text-sm text-secondary ${
                            c.price === c.offPrice
                              ? "hidden"
                              : "block line-through"
                          }`}
                        >
                          ${c.price}
                        </span>
                      </div>
                      <button className="bg-primary px-3 py-2 text-white rounded text-sm">
                        Rental Now
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      {/* recommended car */}
      <div>
        <p className="text-secondary">Recommended car</p>
        <div className="mb-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
          {cars.map((rc) => {
            return (
              rc.recommended && (
                <div key={rc.id} className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{rc.name}</span>
                    <span>
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                          stroke="#90A3BF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="text-secondary text-sm">{rc.type}</span>
                  <div className="flex justify-between items-center">
                    {/* car image */}
                    <div className="my-8 flex flex-1 items-center justify-center">
                      <img src={`${rc.imageUrl}`} alt={`car ${rc.id}`} />
                    </div>
                    {/* description */}
                    <div className="flex flex-col text-secondary mb-6 gap-y-3">
                      <span className="text-xs flex items-center gap-x-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.032 5.44283L11.8653 4.85949C11.6495 4.75449 11.3812 4.83616 11.2762 5.05199C11.1653 5.27366 11.2528 5.53616 11.4687 5.64116L12.3962 6.10199V8.89616L10.2087 8.90199V2.91699C10.2087 1.75033 9.42699 1.16699 8.45866 1.16699H3.79199C2.82366 1.16699 2.04199 1.75033 2.04199 2.91699V12.3962H1.16699C0.927826 12.3962 0.729492 12.5945 0.729492 12.8337C0.729492 13.0728 0.927826 13.2712 1.16699 13.2712H11.0837C11.3228 13.2712 11.5212 13.0728 11.5212 12.8337C11.5212 12.5945 11.3228 12.3962 11.0837 12.3962H10.2087V9.77699L12.8337 9.77116C13.0787 9.77116 13.2712 9.57283 13.2712 9.33366V5.83366C13.2712 5.67033 13.1778 5.51866 13.032 5.44283ZM3.50033 4.01949C3.50033 3.20866 3.99616 2.91699 4.60283 2.91699H7.65366C8.25449 2.91699 8.75033 3.20866 8.75033 4.01949V4.73699C8.75033 5.54199 8.25449 5.83366 7.64783 5.83366H4.60283C3.99616 5.83366 3.50033 5.54199 3.50033 4.73116V4.01949ZM3.79199 7.14616H5.54199C5.78116 7.14616 5.97949 7.34449 5.97949 7.58366C5.97949 7.82283 5.78116 8.02116 5.54199 8.02116H3.79199C3.55283 8.02116 3.35449 7.82283 3.35449 7.58366C3.35449 7.34449 3.55283 7.14616 3.79199 7.14616Z"
                            fill="#90A3BF"
                          />
                        </svg>
                        {rc.gasolineCapacity}
                      </span>
                      <span className="text-xs flex items-center gap-x-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 1C3.688 1 1 3.688 1 7C1 10.312 3.688 13 7 13C10.312 13 13 10.312 13 7C13 3.688 10.318 1 7 1Z"
                            fill="#90A3BF"
                          />
                          <rect
                            x="2"
                            y="2"
                            width="10"
                            height="10"
                            rx="5"
                            fill="white"
                          />
                          <path
                            d="M7 3C4.792 3 3 4.792 3 7C3 9.208 4.792 11 7 11C9.208 11 11 9.208 11 7C11 4.792 9.212 3 7 3Z"
                            fill="#90A3BF"
                          />
                          <rect
                            x="8"
                            y="6"
                            width="4"
                            height="2"
                            fill="#90A3BF"
                          />
                          <rect
                            x="2"
                            y="6"
                            width="4"
                            height="2"
                            fill="#90A3BF"
                          />
                          <rect
                            x="6"
                            y="8"
                            width="2"
                            height="4"
                            fill="#90A3BF"
                          />
                          <rect
                            x="4"
                            y="4"
                            width="6"
                            height="6"
                            rx="3"
                            fill="white"
                          />
                        </svg>
                        {rc.steering}
                      </span>
                      <span className="text-xs flex items-center gap-x-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25033 1.16699C3.72199 1.16699 2.47949 2.40949 2.47949 3.93783C2.47949 5.43699 3.65199 6.65033 5.18033 6.70283C5.22699 6.69699 5.27366 6.69699 5.30866 6.70283C5.32033 6.70283 5.32616 6.70283 5.33782 6.70283C5.34366 6.70283 5.34366 6.70283 5.34949 6.70283C6.84282 6.65033 8.01532 5.43699 8.02116 3.93783C8.02116 2.40949 6.77866 1.16699 5.25033 1.16699Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M8.21356 8.25418C6.58605 7.16918 3.93189 7.16918 2.29272 8.25418C1.55189 8.75001 1.14355 9.42085 1.14355 10.1383C1.14355 10.8558 1.55189 11.5208 2.28689 12.0108C3.10355 12.5592 4.17689 12.8333 5.25022 12.8333C6.32355 12.8333 7.39689 12.5592 8.21356 12.0108C8.94855 11.515 9.35689 10.85 9.35689 10.1267C9.35106 9.40918 8.94855 8.74418 8.21356 8.25418Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M11.6605 4.28156C11.7538 5.41323 10.9488 6.4049 9.83464 6.53906C9.8288 6.53906 9.8288 6.53906 9.82297 6.53906H9.80547C9.77047 6.53906 9.73547 6.53906 9.7063 6.55073C9.14047 6.5799 8.6213 6.39906 8.23047 6.06656C8.8313 5.5299 9.17547 4.7249 9.10547 3.8499C9.06464 3.3774 8.9013 2.94573 8.6563 2.57823C8.87797 2.4674 9.13464 2.3974 9.39714 2.37406C10.5405 2.2749 11.5613 3.12656 11.6605 4.28156Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M12.8278 9.67708C12.7811 10.2429 12.4195 10.7329 11.8128 11.0654C11.2295 11.3862 10.4945 11.5379 9.7653 11.5204C10.1853 11.1412 10.4303 10.6687 10.477 10.1671C10.5353 9.44375 10.1911 8.74958 9.5028 8.19541C9.11197 7.88625 8.65697 7.64125 8.16113 7.46041C9.4503 7.08708 11.072 7.33791 12.0695 8.14291C12.6061 8.57458 12.8803 9.11708 12.8278 9.67708Z"
                            fill="#90A3BF"
                          />
                        </svg>
                        {rc.capacity}
                      </span>
                    </div>
                  </div>
                  {/* price */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-start">
                      <div>
                        <span className="font-bold">${rc.offPrice} /</span>
                        <span className="text-secondary text-sm">day</span>
                      </div>
                      <span
                        className={`text-sm text-secondary ${
                          rc.price === rc.offPrice
                            ? "hidden"
                            : "block line-through"
                        }`}
                      >
                        ${rc.price}
                      </span>
                    </div>
                    <button className="bg-primary px-3 py-2 text-white rounded text-sm">
                      Rental Now
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="flex mb-14">
          <div className="flex-1 text-center">
            <button className="bg-primary px-3 py-2 text-white rounded text-sm">
              Show more car
            </button>
          </div>
          <span className="text-secondary">120 car</span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
