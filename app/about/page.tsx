import Link from "next/link"

type Props = {}

export default function About({}: Props) {
  // throw new Error ('Not today!')
  
  return (
    <>
        <h1>About the Project</h1>
        <Link href="/">
            Link to Home
        </Link>
    </>
  )
}