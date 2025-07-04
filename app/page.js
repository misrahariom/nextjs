import Image from "next/image";
import Link from "next/link";
import Layout from "./navigation";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb6">Welcome to Home Page</h1>
      <Link href="/about">Go to about page</Link><br></br>
      <Link href="/posts/1">Go to post 1</Link><br></br>
      <Link href="/posts/2">Go to post 2</Link>
      <p>Public key is {process.env.NEXT_PUBLIC_API_KEY}
      </p>
    </Layout>
  );
}
