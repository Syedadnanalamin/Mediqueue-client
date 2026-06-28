'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-error">
          500
        </h1>
        <h2 className="text-4xl font-bold mt-6">
          Something went wrong!
        </h2>
        <p className="text-base-content/70 mt-4 text-lg leading-relaxed">
          An unexpected error occurred while rendering this page.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn btn-primary px-8 rounded-xl"
          >
            Try Again
          </button>
          <a
            href="/"
            className="btn btn-outline px-8 rounded-xl"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
