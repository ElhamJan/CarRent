import { useEffect, useState } from "react";
import { cars } from "../assets/data/cars";
import mobileMap from "../assets/images/mobileMap.jpg";
import PickDropSelection from "../components/PickDropSelection";
import DounutChart from "../components/DounutChart";
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  const [carsWithDate, setCarsWithDate] = useState([]);
  const [sortedCars, setSortedCars] = useState([]);

  useEffect(() => {
    setCarsWithDate(cars);

    const carsWithDateArr = carsWithDate.map((car) => {
      return {
        ...car,
        totalDate: new Date(car.dropOff.date + " " + car.dropOff.time),
      };
    });

    setSortedCars(carsWithDateArr);

    carsWithDateArr.sort((a, b) => {
      return b.totalDate - a.totalDate;
    });
  }, [carsWithDate]);

  return (
    <>
      <div className="rounded bg-white p-4 mt-5">
        <h3 className="font-bold mb-5">Detail Rental</h3>
        <div className="flex justify-center items-center mb-5">
          <img src={mobileMap} alt="Mobile map" />
        </div>
        {sortedCars.slice(0, 1).map((recent) => {
          return (
            <div key={recent.id}>
              <div className="flex justify-center items-center mb-5">
                <div className="bg-primary rounded p-2.5 w-1/2 flex justify-center items-center bg-recent-admin-bg bg-no-repeat bg-cover">
                  <img src={recent.imageUrl} alt="recent rental car" />
                </div>
                <div className="p-2 flex flex-col items-start gap-y-2">
                  <h2 className="font-bold text-lg">{recent.name}</h2>
                  <p className="text-sm text-secondary">{recent.type}</p>
                </div>
              </div>
              <PickDropSelection props={recent} />
              <hr />
              <div className="flex justify-between items-center mt-3">
                <div className="flex flex-col">
                  <p className="font-bold">Total Rental Price</p>
                  <p className="text-sm text-secondary">Overall price rental</p>
                </div>
                <div className="font-bold text-lg">${recent.offPrice}.00</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rounded bg-white p-4 mt-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Top 5 Car Rental</h2>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                stroke="#1A202C"
                strokeWidth="1.5"
              />
              <path
                d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                stroke="#1A202C"
                strokeWidth="1.5"
              />
              <path
                d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                stroke="#1A202C"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </div>
        {/* dounut chart */}
        <div className="max-w-screen-lg mt-4">
          <DounutChart />
        </div>
      </div>
      {/* recent transactions */}
      <div className="rounded bg-white p-4 mt-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Recent Transaction</h2>
          <Link to="#" className="text-links text-xs">
            View All
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
