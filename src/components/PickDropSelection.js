const PickDropSelection = ({ props }) => {
  return (
    <div>
      {/* pickUp */}
      <div className="flex flex-col gap-y-4 mb-7">
        <div className="flex items-center gap-x-2">
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
        {/* locations */}
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold">Locations</p>
          <select
            name="pDashboardLocation"
            id="pDashboardLocation"
            className="text-sm text-slate-400 p-4 bg-bg rounded-lg"
            disabled
          >
            <option value="1">{props.pickUp.locations}</option>
          </select>
        </div>
        {/* time */}
        <div className="flex flex-col gap-y-3">
          <p className="font-semibold">Time</p>
          <select
            name="pDashboardTime"
            id="pDashboardTime"
            className="text-sm text-slate-400 p-4 bg-bg rounded-lg"
            disabled
          >
            <option value="1">{props.pickUp.time}</option>
          </select>
        </div>
        {/* date */}
        <div className="flex flex-col gap-y-3">
          <p className="font-semibold">Date</p>
          <select
            name="pDashboardDate"
            id="pDashboardDate"
            className="text-sm text-slate-400 p-4 bg-bg rounded-lg"
            disabled
          >
            <option value="1">{props.pickUp.date}</option>
          </select>
        </div>
      </div>
      {/* dropOff */}
      <div className="flex flex-col gap-y-4 mb-5">
        <div className="flex items-center gap-x-2">
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
        {/* locations */}
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold">Locations</p>
          <select
            name="dDashboardLocation"
            id="dDashboardLocation"
            className="text-sm text-slate-400 p-4 bg-bg rounded-lg"
            disabled
          >
            <option value="1">{props.dropOff.locations}</option>
          </select>
        </div>
        {/* time */}
        <div className="flex flex-col gap-y-3">
          <p className="font-semibold">Time</p>
          <select
            name="dDashboardTime"
            id="dDashboardTime"
            className="text-sm text-slate-400 p-4 bg-bg rounded-lg"
            disabled
          >
            <option value="1">{props.dropOff.time}</option>
          </select>
        </div>
        {/* date */}
        <div className="flex flex-col gap-y-3">
          <p className="font-semibold">Date</p>
          <select
            name="dDashboardDate"
            id="dDashboardDate"
            className="text-sm text-slate-400 p-4 bg-bg rounded-lg"
            disabled
          >
            <option value="1">{props.dropOff.date}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PickDropSelection;
