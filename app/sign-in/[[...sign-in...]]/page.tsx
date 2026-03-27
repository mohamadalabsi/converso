import { SignIn } from '@clerk/nextjs'

// to make it in the same app not different page 
export default function Page() {
    return <main className="flex items-center justify-center">
        <SignIn />
    </main>
}