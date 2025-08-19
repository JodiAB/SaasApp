import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
   <h1 className="text-2xl underline">Popular Companions</h1>
   <section className="home-section">
    <CompanionCard
    id= "123"
    name="neura the Brainy Explorer"
    topic="Neural Network of the Brain"
    subject="Science"
    duration = {45}
    color="#f5f"
    />
  <CompanionCard
    id= "456"
    name="Countsy the Number Wizard"
    topic="Derivatives & Integrals"
    subject="Maths"
    duration = {30}
    color="#fd3"
    />
     <CompanionCard
    id= "789"
    name="Verba the Vocabulary Builder"
    topic="Language"
    subject="English Literature"
    duration = {30}
    color="##BDE7FF"
    />
   </section>
   <section className='home-section'>

      <CompanionsList />
      <CTA />
   </section>
   </main>
  )
}

export default Page