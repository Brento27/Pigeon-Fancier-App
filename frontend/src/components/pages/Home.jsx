import React, { useState } from "react"
import { Pigeons } from "../../data"
import PigeonCard from "../shared/PigeonCard"

function Home() {
  const [pigeons, setPigeons] = useState(Pigeons)

  return (
    <div className="pt-12 flex justify-between">
      {pigeons.map((pigeon) => (
        <PigeonCard key={pigeon.id} pigeon={pigeon} />
      ))}
    </div>
  )
}

export default Home
