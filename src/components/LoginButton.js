import Link from "next/link"

export default function LoginButton() {
    return (
        <button>
            <Link href="/api/auth/login">Login Now</Link>
        </button>
    )
}