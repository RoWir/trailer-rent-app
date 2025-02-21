import { useState } from 'react'
import './App.css'
import { Customer, Sale, Trailer } from './types'
import TrailerBox from './components/trailerbox/TrailerBox'
import { Grid2 } from '@mui/material'
import TrailerView from './components/trailerview/TrailerView'

function App() {
  const [activeTrailer, setActiveTrailer] = useState<Trailer|null>(null);

  const trailers: Trailer[] = [
    { id: "T001", make: "Big Tex", model: "14LP", year: 2023, type: "Dump Trailer", price: 8500, status: "Available", thumbnail: 'https://cdn.pixabay.com/photo/2014/07/26/02/04/vehicle-402015_1280.jpg' },
    { id: "T002", make: "PJ Trailers", model: "C5 Car Hauler", year: 2022, type: "Car Hauler", price: 7200, status: "Sold", thumbnail: 'https://cdn.pixabay.com/photo/2013/05/17/16/42/car-111812_1280.jpg' },
    { id: "T003", make: "Load Trail", model: "83x20", year: 2024, type: "Utility", price: 6700, status: "Available", thumbnail: 'https://cdn.pixabay.com/photo/2019/06/29/07/37/trailers-4305635_1280.jpg' },
    { id: "T004", make: "Diamond C", model: "LPX210", year: 2023, type: "Equipment", price: 11500, status: "Sold", thumbnail: 'https://cdn.pixabay.com/photo/2015/10/26/14/34/trailer-1007245_1280.jpg' },
    { id: "T005", make: "Sure-Trac", model: "ST8218TA-B", year: 2024, type: "Flatbed", price: 9300, status: "Available", thumbnail: 'https://cdn.pixabay.com/photo/2021/03/30/12/58/go-kart-6136916_960_720.jpg' }
  ]

  const customers: Customer[] = [
    { id: "C001", name: "John Doe", email: "john.doe@email.com", phone: "555-123-4567", city: "Dallas, TX" },
    { id: "C002", name: "Sarah Thompson", email: "sarah.t@email.com", phone: "555-234-5678", city: "Austin, TX" },
    { id: "C003", name: "Mike Harrison", email: "mike.h@email.com", phone: "555-345-6789", city: "Houston, TX" },
    { id: "C004", name: "Emily Johnson", email: "emily.j@email.com", phone: "555-456-7890", city: "Phoenix, AZ" },
    { id: "C005", name: "Robert Wilson", email: "robert.w@email.com", phone: "555-567-8901", city: "Denver, CO" }
  ]

  const sales: Sale[] = [
    { id: "S001", customerId: "C001", trailerId: "T002", saleDate: "2024-01-15", salePrice: 7200, paymentMethod: "Credit Card", status: "Completed" },
    { id: "S002", customerId: "C003", trailerId: "T004", saleDate: "2024-02-10", salePrice: 11200, paymentMethod: "Bank Transfer", status: "Completed" },
    { id: "S003", customerId: "C002", trailerId: "T001", saleDate: "2024-02-18", salePrice: 8300, paymentMethod: "Cash", status: "Pending" }
  ]

  if (activeTrailer !== null) {
    return (
      <TrailerView setActiveTrailer={setActiveTrailer} trailer={activeTrailer}/>
    )
  }

  return (
    <div className='gridWrap'>
      <Grid2 container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} sx={{ maxWidth: '1280px'}}>
        {trailers.map(trailer => (
          <Grid2 key={trailer.id} size={{ xs: 2, sm: 4, md: 4 }}>
            <TrailerBox trailer={trailer} setActiveTrailer={setActiveTrailer}/>
          </Grid2>
        ))}
      </Grid2>
    </div>
  )
}

export default App
