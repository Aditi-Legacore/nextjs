// components/BackButton.tsx
'use client';

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  );
}
