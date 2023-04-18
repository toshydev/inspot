import useSWR from "swr";
import ReviewList from "../ReviewList";
import Spinner from "../Spinner";
import ReviewForm from "../ReviewForm";

export default function ReviewSection({ id }) {
  const { data, isLoading, error } = useSWR(`/api/venues/${id}`);
  return (
    <>
      <ReviewForm id={id} />
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
