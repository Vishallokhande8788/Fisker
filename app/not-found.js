import Link from "next/link";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 text-center sm:gap-4">
      <h1 className="text-2xl font-bold sm:text-4xl">Not Found &mdash; 404</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to{" "}
        <Link href="/" className="text-blue-500 underline">
          home
        </Link>
        .
      </p>
    </main>
  );
}

export default NotFoundPage;
