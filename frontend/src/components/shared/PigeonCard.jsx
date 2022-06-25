import React from "react"

function PigeonCard({ pigeon }) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl pt-8">
      <figure>
        <img src={pigeon.img} alt={pigeon.colour} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{pigeon.name}</h2>
        <p>{pigeon.desc}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default PigeonCard
