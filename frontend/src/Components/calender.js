import React, { useState } from "react";
// import "./Calendar.css"; // Ensure you have this line to apply CSS

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="empty" key={`empty-${i}`}></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      days.push(
        <div className={`day ${isToday ? "today" : ""}`} key={i}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar text-black mt-5">
      <div className="header">
        <button onClick={prevMonth}>{"<"}</button>
        <div className="month">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <button onClick={nextMonth}>{">"}</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div className="day-name" key={index}>
            {day}
          </div>
        ))}
      </div>
      <br />
      <div className="days">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
