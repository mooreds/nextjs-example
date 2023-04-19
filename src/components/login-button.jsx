import {useSession, signIn, signOut} from "next-auth/react"

export default function Component() {
    const {data: session} = useSession()
    if (session) {
        return (
            <>
                Logged in as {session.user.email} <br/>
                <button onClick={() => signOut()}>Log out</button>
            </>
        )
    }
    return (
        <>
            Not logged in <br/>
            <button onClick={() => signIn()}>Log in</button>
        </>
    )
}

