import React from 'react'
import CodeEditorMenu from '@/components/Colabs/multi-language/CodeEditorMenu'
import EmmetEditor from '@/components/Colabs/EmmetEditor'
import EditorProvider from '@/contexts/MultiLanguageEditorProvider'

type Props = {}

const page = (props: Props) => {
  return (
    <EditorProvider>
      <main>
      <CodeEditorMenu />
      <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <EmmetEditor />
        </div>
      </div>
    </main>
    </EditorProvider>
  )
}

export default page