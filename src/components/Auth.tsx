import { useState } from 'react'

type Props = {
  changeAuthData: (idInstance: string, apiTokenInstance: string) => void
}

export default function Auth({ changeAuthData }: Props) {
  const [idInstance, setIdInstance] = useState('')
  const [apiTokenInstance, setApiTokenInstance] = useState('')

  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    changeAuthData(idInstance, apiTokenInstance)
    setSubmitted(true)
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form onSubmit={onSubmit}>
        <input
          name="idInstance"
          type="text"
          placeholder="Enter idInstance"
          className="bg-white rounded-lg px-4 outline-none border-0 w-full mb-5"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
        />
        <input
          name="apiTokenInstance"
          type="text"
          placeholder="Enter apiTokenInstance"
          className="bg-white rounded-lg px-4 outline-none border-0 w-full"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
        />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mt-5 bg-wamessage rounded-md px-5 py-2"
          >
            Submit
          </button>
          {submitted ? <p className="mt-4 ml-5">Submitted!</p> : <></>}
        </div>
      </form>
    </div>
  )
}
