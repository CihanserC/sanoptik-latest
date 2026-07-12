import React from 'react';
import GoogleReviews from './GoogleReviews';

const ReviewsSection = () => (
  <section className="py-16 bg-emerald-900 text-white" id="yorumlar">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <GoogleReviews limit={6} variant="dark" />
    </div>
  </section>
);

export default ReviewsSection;
