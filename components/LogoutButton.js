import Link from "next/link"

export default function LogoutButton() {
    return (
        <button>
            <Link href="/api/auth/logout">Logout</Link>
        </button>
    )
}