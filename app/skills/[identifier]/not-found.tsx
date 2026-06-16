import Link from "next/link";

export default function NotFound() {
  return (
    <section className="p-4 max-w-md mx-auto text-center border border-primary rounded-md mt-4">
      <h1 className="text-2xl">Skill not found</h1>
      <p>The skill you are looking for does not exist</p>
      <Link className="btn btn-outline mt-4" href="/skills">Return to skills list</Link>
    </section>
  )
}