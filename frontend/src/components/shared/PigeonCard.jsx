import React from "react"
import { Link } from "react-router-dom"

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
          <Link to={`/my-pigeons/${pigeon.id}`}>
            <button class="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PigeonCard
