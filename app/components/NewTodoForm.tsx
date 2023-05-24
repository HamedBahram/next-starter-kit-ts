'use client'

import { useRef } from 'react'
import { createTodoAction } from '@/app/_actions'

const NewTodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  async function action(data: FormData) {
    const title = data.get('title')
    if (typeof title !== 'string' || !title) return

    await createTodoAction(title)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className='mb-2 font-medium'>Create a New Todo</h2>
      <input
        type='text'
        name='title'
        className='rounded border border-slate-400 px-2 py-0.5'
      />
      <button
        type='submit'
        className='ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50'
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm
