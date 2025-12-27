import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-lg text-gray-600">
        This is a test app for Tally Analytics integration.
      </p>
      <Link href="/" className="mt-8 text-blue-600 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}
