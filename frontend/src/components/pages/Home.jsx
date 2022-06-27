import React, { useState } from "react"
import PigeonCard from "../shared/PigeonCard"

function Home({ pigeons, setCurrPigeon }) {
  return (
    <div className="pt-12 flex justify-between">
      {pigeons.map((pigeon) => (
        <PigeonCard
          key={pigeon.id}
          pigeon={pigeon}
          setCurrPigeon={setCurrPigeon}
        />
      ))}
    </div>
  )
}

export default Home
