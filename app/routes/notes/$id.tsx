import { Input } from '@/components/ui/input'
import { createFileRoute, Link } from '@tanstack/react-router'
import { MDXEditor, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin } from '@mdxeditor/editor'
import { useState } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
export const Route = createFileRoute('/notes/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const [note, setNode] = useState({ title: 'title', content: '# Hello **world**' })
  return <div className='p-2 grid h-screen grid-rows-[min-content_1fr] gap-2'>
    <div className="flex gap-2">
      <Link to='/notes' className={buttonVariants({variant:'ghost'})}> <ChevronLeft/> </Link>
      <Input
        placeholder='Title'
        value={note.title}
        onChange={e => setNode(p => ({ ...p, title: e.target.value }))}
      />
      <Button variant='default'> Save </Button>
    </div>
    <MDXEditor
      markdown={note.content}
      onChange={(markdown) => {
        setNode(p => ({ ...p, content: markdown }))
      }}
      className='border rounded-md'
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin()
      ]}
    />
  </div>
}
