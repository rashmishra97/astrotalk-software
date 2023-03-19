import Banner from '../components/Banner';
import React,{Suspense} from 'react';

function HomePage() {
  return (
    <div className="HomePage">
       <Suspense fallback={<div>Loading...</div>}>
          <Banner />
      </Suspense>
    </div>
  );
}

export default HomePage;
