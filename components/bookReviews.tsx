import { Transition } from "@headlessui/react";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useSWR from "swr";
import { BookReview } from "@prisma/client";

export default function bookReviews() {
  let [reviewsVisible, setReviewsVisible] = useState(false);
  const { width, height } = useWindowDimensions();

  const { data, error } = useSWR("/api/bookReviews");
  const bookReviews: BookReview[] = data;

  if (error) return <div>Failed to load book reviews</div>;
  if (!bookReviews) return <div>Loading book reviews...</div>;

  if (width != undefined && width > 768) {
    reviewsVisible = true;
  }

  function getReviewDropArrowClass() {
    if (reviewsVisible) {
      return "ml-auto place-self-end p-2 rotate-90";
    } else {
      return "ml-auto place-self-end p-2";
    }
  }
  return (
    <div className="mb-8 md:mb-0">
      <div
        onClick={() => {
          setReviewsVisible((reviewsVisible) => !reviewsVisible);
        }}
        className="mb-8 flex rounded-md bg-secondary p-4 drop-shadow-xl md:mb-0 md:hidden"
      >
        <div className="flex p-3">
          <span className="text-2xl font-semibold">Book reviews</span>
        </div>
        <div className={getReviewDropArrowClass()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <Transition
        show={reviewsVisible}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {bookReviews &&
          bookReviews.map((bookReview: BookReview) => (
            <div className="mx-[-1rem] sm:mx-0" key={bookReview.id}>
              {bookReview.title}
            </div>
          ))}
      </Transition>
    </div>
  );
}
