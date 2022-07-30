import { Transition } from "@headlessui/react";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useSWR from "swr";
import { BookReview } from "@prisma/client";
import moment from "moment";

export default function recentReviews() {
  let [reviewsVisible, setReviewsVisible] = useState(false);
  const { width, height } = useWindowDimensions();

  const { data, error } = useSWR("/api/reviews/recent");
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

  function getReviewCardClass() {
    if (reviewsVisible) {
      return "flex rounded-md bg-primary-100 p-4 drop-shadow-xl md:mb-0 md:hidden";
    } else {
      return "flex rounded-md bg-secondary p-4 drop-shadow-xl md:mb-0 md:hidden";
    }
  }
  return (
    <div className="mb-8 md:mb-0">
      <div
        onClick={() => {
          setReviewsVisible((reviewsVisible) => !reviewsVisible);
        }}
        className={getReviewCardClass()}
      >
        <div className="flex p-3">
          <span className="text-2xl font-semibold">Book Reviews</span>
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
        <div className="ml-4 hidden text-xl font-semibold md:block">
          Recent Book Reviews
        </div>
        <div className="my-2 flex flex-wrap">
          {bookReviews &&
            bookReviews.map((bookReview: BookReview) => (
              <div
                className="my-2 w-screen rounded-lg bg-white p-6 shadow-lg md:mx-4 md:max-w-lg"
                key={bookReview.id}
              >
                <h5 className="text-xl font-medium leading-tight text-gray-900">
                  {bookReview.title}
                </h5>
                <div className="mb-2 text-gray-400">{bookReview.author}</div>
                <p className="mb-4 text-base text-gray-700">
                  {bookReview.reviewText}
                </p>
                <div className="float-right flex flex-col">
                  <div className="float-right text-gray-400">
                    - {bookReview.reviewer ? bookReview.reviewer : "Anonymous"}
                  </div>
                  <div className="float-right text-xs text-gray-300">
                    {moment(bookReview.created).calendar({
                      sameDay(m?, now?) {
                        return moment(m).fromNow();
                      },
                      lastDay: "[Yesterday]",
                      lastWeek: "[Last] dddd",
                    })}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Transition>
    </div>
  );
}
