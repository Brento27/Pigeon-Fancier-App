import React from "react"

function About() {
  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-5">
      <div
        class="radial-progress bg-primary text-primary-content border-4 border-primary"
        style={{ "--value": 10, "--size": "15rem" }}
      >
        10% Complete
      </div>
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <div class="stat-title">New Pigeons</div>
          <div class="stat-value">4</div>
          <div class="stat-desc">2022 - 2023</div>
        </div>

        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">0</div>
          <div class="stat-desc">↗︎ 0 (0)</div>
        </div>

        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">0</div>
          <div class="stat-desc">↘︎ 0 (0)</div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-black">About Us</h1>
        <p>
          We are currently still in production of this website. Our lead
          developer is Brent Lombaard (me), a young developer of only 19 years
          old. I am creating this website as a easy interface to show race
          results, pigeon stats and later on implement loft, club and Fed
          management plus auctions. I'm developing this site in my free time for
          practice and fun.
        </p>
      </div>
    </div>
  )
}

export default About
