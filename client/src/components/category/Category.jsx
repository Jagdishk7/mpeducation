import React from 'react'
import SimpleCard from '../Cards/SimpleCard'
import './Category.css'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='mt-2 p-3 category-container'>
      <Link to={'/playschool'}><SimpleCard head={'Pre / Play Schools'}/></Link>
      <Link to={'/BoardingSchools'}><SimpleCard head={'Boarding Schools'}/></Link>
      <Link to={'/CollegesUniversities'}><SimpleCard head={'Colleges & Universities'}/></Link>
      <Link to={'/coachings'}><SimpleCard head={'Coachings'}/></Link>
      <Link to={'/TechnicalInstitutes'}><SimpleCard head={'Technical Institutes'}/></Link>
      <Link to={'/SoftwareInstitutes'}><SimpleCard head={'Software / IT Certifications'}/></Link>
    </div>
  )
}

export default Category
