import Banner from '../components/Banner';
import React, { Suspense } from 'react';
import Review from '../components/Review';

function HomePage() {
  return (
    <div className="HomePage">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Review />
      </Suspense>
    </div>
  );
}

export default HomePage;
