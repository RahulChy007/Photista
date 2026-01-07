import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Photographers = () => {

  const { speciality } = useParams()

  const [ filterPhotographer, setFilterPhotographer ]= useState([])

  const navigate = useNavigate()

  const { photographers } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterPhotographer(photographers.filter(p => p.speciality === speciality))
    } else {
      setFilterPhotographer(photographers)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[photographers,speciality])

  return (
    <div>
        <p className='text-gray-600'>Browse through the specialist photographers</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-xs text-gray-600'>
            <p onClick={()=> speciality === 'Wedding Photographer' ? navigate('/photographers') : navigate('/photographers/Wedding Photographer') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Wedding Photographer" ? "bg-indigo-100 text-black" : ""}`}>Wedding Photographer</p>
            <p onClick={()=> speciality === 'Portrait Photographer' ? navigate('/photographers') : navigate('/photographers/Portrait Photographer') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Portrait Photographer" ? "bg-indigo-100 text-black" : ""}`}>Portrait Photographer</p>
            <p onClick={()=> speciality === 'Fashion Photographer' ? navigate('/photographers') : navigate('/photographers/Fashion Photographer') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Fashion Photographer" ? "bg-indigo-100 text-black" : ""}`}>Fashion Photographer</p>
            <p onClick={()=> speciality === 'Event Photographer' ? navigate('/photographers') : navigate('/photographers/Event Photographer') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Event Photographer" ? "bg-indigo-100 text-black" : ""}`}>Event Photographer</p>
            <p onClick={()=> speciality === 'Product Photographer' ? navigate('/photographers') : navigate('/photographers/Product Photographer') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Product Photographer" ? "bg-indigo-100 text-black" : ""}`}>Product Photographer</p>
            <p onClick={()=> speciality === 'Travel Photographer' ? navigate('/photographers') : navigate('/photographers/Travel Photographer') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Travel Photographer" ? "bg-indigo-100 text-black" : ""}`}>Travel Photographer</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterPhotographer.map((item, index)=>(
                <div onClick={()=>{navigate(`/appointments/${item._id}`); scrollTo(top);}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Photographers