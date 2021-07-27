import React from "react";
import "./Page.css";

function Timer() {
  return (
    <div>
      <section className="timer-container">
        <section className="timer">
          <div></div>
          <section>
            <p>87</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Timer;
