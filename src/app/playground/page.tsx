import Editor from '@/components/Editor/Editor'
import EditorSideBar from '@/components/Editor/EditorSideBar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='pt-[10vh] flex'>
        <EditorSideBar />
        <div className='flex-1'>
        <Editor />
        </div>
    </main>
  )
}

export default page