import Banner from '../components/Banner'
import React, { Suspense } from 'react'
import Review from '../components/Review'
import TotalScore from '../components/TotalScore'
import AstrologerCarousel from '../components/AstrologerCarousel'
import WhyAstrologer from '../components/WhyAstrologer'
import FAQ from '../components/FAQ'
import AstrologersList from '../components/AstrologersList'

function HomePage() {
  return (
    <div className="HomePage">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <TotalScore />
        <Review />
        <AstrologerCarousel />
        <WhyAstrologer />
        <FAQ />
      </Suspense>
    </div>
  )
}

export default HomePage
