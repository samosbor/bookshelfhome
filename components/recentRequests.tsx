import useSWR, { Key, Fetcher } from "swr";
import { BookRequest } from "@prisma/client";

export default function recentRequests() {
  const { data, error } = useSWR("/api/allBookRequests");
  const bookRequests: BookRequest[] = data;

  if (error) return <div>Failed to load</div>;
  if (!bookRequests) return <div>Loading...</div>;

  return (
    <div>
      <table>
        <tbody>
          {bookRequests &&
            bookRequests.map((bookRequest: BookRequest) => (
              <tr key={bookRequest.id}>
                <td>{bookRequest.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
