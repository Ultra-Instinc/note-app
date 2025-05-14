import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PlusIcon } from 'lucide-react'

export const Route = createFileRoute('/notes/')({
  component: RouteComponent,
})

const notes = [
  { title: 'title 1', id: '1' },
  { title: 'title 2', id: '2' },
  { title: 'title 3', id: '3' },
  { title: 'title 4', id: '4' },
  { title: 'title 5', id: '5' },
  { title: 'title 6', id: '6' },
  { title: 'title 7', id: '7' },
]

function RouteComponent() {
  return (
    <div className="">
      <div className="flex w-full items-center justify-between border-b-2 px-4 py-2">
        <h1 className='text-xl'>Notes</h1>
        <Button size='sm'> <PlusIcon />  Add Note </Button>
      </div>
      <div className="p-4">
        {notes.map(note => (
          <div key={note.id} >
            <Link
              to={"/notes/$id"}
              params={{ id: note.id }}
              className="hover:text-blue-800 hover:underline"
            >
              {note.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
