import useSWR, { Key, Fetcher } from "swr";
import { BookRequest } from "@prisma/client";

export default function recentRequests() {
  const { data, error } = useSWR("/api/allBookRequests");
  const bookRequests: BookRequest[] = data;

  if (error) return <div>Failed to load recent requests</div>;
  if (!bookRequests) return <div>Loading recent requests...</div>;

  return (
    <div className="overflow-auto shadow-xl rounded-lg m-1 sm:m-0 mt-5">
      <table className="w-full table-fixed border-collapse text-left text-sm text-gray-500">
        <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900">
          Recent Requests
        </caption>
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="w-1/2 py-3 px-4">
              Title
            </th>
            <th scope="col" className="w-1/4 py-3 px-4">
              Author
            </th>
            <th scope="col" className="w-1/6 py-3 px-4">
              Filled
            </th>
            <th scope="col" className="w-1/5 py-3 px-4">
              Book Link
            </th>
            <th scope="col" className="w-1/5 py-3  px-4">
              Audio Link
            </th>
          </tr>
        </thead>
        <tbody>
          {bookRequests &&
            bookRequests.map((bookRequest: BookRequest) => (
              <tr className="border-b bg-white" key={bookRequest.id}>
                <th
                  scope="row"
                  className="w-72 py-4 px-4 font-medium text-gray-900"
                >
                  {bookRequest.title}
                </th>
                <td className="py-4 px-4">{bookRequest.author}</td>
                <td className="py-4 px-4">
                  {bookRequest.fufilled ? "Yes" : "No"}
                </td>
                <td className="py-4 px-4">
                  {bookRequest.linkToEbook && (
                    <a href={bookRequest.linkToEbook}>
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </td>
                <td className="py-4 px-4">
                  {bookRequest.linkToAudio && (
                    <a href={bookRequest.linkToAudio}>
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
