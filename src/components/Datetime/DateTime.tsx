'use client'
import { useEffect, useState } from "react";
import './DateTime.scss'
const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <div className="datetime">
      <span >
        {now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
      </span>
      <span >
        {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
      </span>
    </div>
  );
};

export default DateTime;