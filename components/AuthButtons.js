import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AuthButtons() {
    const { user} = useUser();
    return (
			<>
				{user && (<LogoutButton />)}
				{!user && (<LogoutButton />)}
			</>
    )
    // if (user) {
    //     return <LogoutButton />
    // } else {
    //     return <LoginButton />
    // }
    
}

