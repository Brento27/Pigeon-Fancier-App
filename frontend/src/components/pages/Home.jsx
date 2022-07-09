import React, { useEffect } from "react"
import PigeonCard from "../shared/PigeonCard"

function Home({ pigeons, setCurrPigeon }) {
  return (
    <div className="pt-10 ml-12 grid grid-cols-3 gap-y-5 gap-x-5">
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
