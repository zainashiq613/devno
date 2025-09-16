import React, { useState } from 'react';

function DetailForm({ setComplete, id }) {
  const [addGuests, setAddGuests] = useState(false);
  return (
    <div className="w-full flex flex-col gap-5">
      <h3 className="text-2xl font-semibold text-[#176aea]">Enter Details</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setComplete(true);
          if (id) {
            localStorage.setItem('selectedTime', id);
          }
        }}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="" className="text-base font-medium text-[#0a0a0a]">
            Name *
          </label>
          <input
            required
            placeholder="Enter your Name"
            className="bg-white px-4 border border-[#a0a0a0] rounded-md py-2.5 outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-base font-medium text-[#0a0a0a]">
            Email *
          </label>
          <input
            required
            placeholder="Enter your Email"
            className="bg-white px-4 border border-[#a0a0a0] rounded-md py-2.5 outline-none"
            type="email"
          />
          {!addGuests && (
            <p
              onClick={() => setAddGuests(true)}
              className="text-[#176aea] cursor-pointer text-sm border px-2 py-1 w-fit rounded-3xl"
            >
              Add Guests
            </p>
          )}
        </div>
        {addGuests && (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-base font-medium text-[#0a0a0a]">
              Guests Email(s)
            </label>
            <textarea
              rows={3}
              placeholder="Enter Guest Emails"
              className="bg-white px-4 border border-[#a0a0a0] rounded-md py-2.5 outline-none"
              type="text"
            ></textarea>
            <p className="text-text-secondary text-xs">
              Notify up to 10 additional guests of the scheduled event.
            </p>
          </div>
        )}
        <p className="text-sm text-text-secondary font-medium">
          Please share anything that will help prepare for our meeting.
        </p>
        <textarea
          rows={6}
          placeholder="Add Additional Notes"
          className="bg-white border border-[#a0a0a0] rounded-md outline-none py-3 px-4"
          name=""
          id=""
        ></textarea>
        <p className="text-sm font-medium text-text-secondary">
          By proceeding, you confirm that you have read and agree to Calendly's Terms of Use and
          Privacy Notice.
        </p>
        <button
          type="submit"
          className="bg-[#176aea] text-sm cursor-pointer text-white w-fit px-4 py-2 rounded-3xl"
        >
          Schedule Event
        </button>
      </form>
    </div>
  );
}

export default DetailForm;
