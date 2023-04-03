import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>inSpot</h1>
      <Link href="/events">To Events</Link>
    </div>
  );
}
