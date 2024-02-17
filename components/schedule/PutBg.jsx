import Image from 'next/image'
import { useEffect, useState } from 'react'

const PutBg = ({ color, speakerImg }) => {
  const [colorChoice, setColorChoice] = useState('bg-white')
  useEffect(() => {
    if (color == 'red') {
      setColorChoice('bg-red-400')
    }
    if (color == 'green') {
      setColorChoice('bg-green-400')
    }
    if (color == 'blue') {
      setColorChoice('bg-sky-400')
    }
    if (color == 'orange') {
      setColorChoice('bg-orange-500')
    }
    if (color == 'yellow') {
      setColorChoice('bg-yellow-400')
    }
  }, [color])

  return (
    <div
      className={`rounded-full
                        ${colorChoice}
                        h-8 w-8 mr-4 ml-2
                        overflow-hidden
        `}
    >
      <Image src={speakerImg} alt="" width={160} height={160} />
    </div>
  )
}

export default PutBg
