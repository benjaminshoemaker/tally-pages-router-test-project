import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-600">
        Get in touch with us.
      </p>
      <Link href="/" className="mt-8 text-blue-600 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}
