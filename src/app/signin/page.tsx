"use client"

import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const SigninPage = (props: Props) => {
    const {status} = useSession()
    const router = useRouter()

    status === "authenticated" ? router.push("/profile") : null

  return (
    <main className='pt-[15vh]'>
        <h1>Sign in page</h1>
        <Button onClick={() => signIn("google")}>Sign in with Google</Button>
    </main>
  )
}

export default SigninPage