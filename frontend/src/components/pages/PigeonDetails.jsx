import React, { useState, useEffect } from "react"
import { GiFemale, GiMale } from "react-icons/gi"

function PigeonDetails({ pigeon }) {
  const [isHen, setIsHen] = useState(true)

  useEffect(() => {
    if (pigeon.sex === "H") {
      return
    } else {
      setIsHen(false)
    }
  }, [pigeon])

  return (
    <div class="flex flex-col w-full lg:flex-row justify-between">
      <div class="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
        <div class="card lg:card-side bg-base-100 shadow-xl my-12">
          <figure>
            <img src={pigeon.img} alt={pigeon.colour} />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {pigeon.union} {pigeon.letters} {pigeon.ringNo} {pigeon.year}{" "}
              {isHen ? (
                <GiFemale style={{ color: "#f00299" }} />
              ) : (
                <GiMale style={{ color: "#0259f0" }} />
              )}
            </h2>
            <h1 class="card-title">{pigeon.name}</h1>
            <p>
              Strain: {pigeon.strain}
              <br />
              {pigeon.desc}
            </p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Contact Fancier</button>
            </div>
          </div>
        </div>
      </div>
      <div class="divider lg:divider-horizontal"></div>
      <div class="grid flex-grow h-full card bg-base-300 rounded-box place-items-left mt-12">
        <div class="card-body">
          <h2 class="card-title">Owned by {pigeon.loft} Hokke</h2>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Pedigree</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PigeonDetails
