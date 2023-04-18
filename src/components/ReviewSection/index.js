import useSWR from "swr";
import ReviewList from "../ReviewList";
import Spinner from "../Spinner";

export default function ReviewSection({id}) {
  const { data, isLoading, error } = useSWR(`/api/venues/${id}`);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error | !data ? (
        <>{error.status}</>
      ) : (
        <ReviewList reviews={data} />
      )}
    </>
  );
}
