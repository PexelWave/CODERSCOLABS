import Editor from '@/components/Editor/Editor'
import EditorSideBar from '@/components/Editor/EditorSideBar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='pt-[10vh] flex flex-col md:flex-row'>
        <EditorSideBar />
        <div className='flex-1'>
        <Editor />
        </div>
    </main>
  )
}

export default page