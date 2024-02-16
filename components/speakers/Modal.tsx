import { urlForImage } from '@/sanity/lib/image'
import { Speaker } from '@/sanity/schemas/speaker'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { FaGlobe, FaLinkedin } from 'react-icons/fa'
import ModalWrapper from '../common/ModalWrapper'

const Modal = ({
  showModal,
  setShowModal,
  currSpeaker,
}: {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  currSpeaker: Speaker
}) => {
  return (
    <ModalWrapper>
      {showModal && (
        <div className="bg-white w-[560px] h-auto relative  border-2 border-black">
          <div className="absolute top-0 right-0 p-4">
            <Image
              src={'/close-button.svg'}
              width={0}
              height={0}
              className="w-full h-full"
              onClick={() => setShowModal(false)}
              alt="close button"
            />
          </div>
          <div className="p-4">
            <div>
              <Image
                src={urlForImage(currSpeaker.image)}
                width={80}
                height={80}
                className="w-[80px] h-[80px] sm:h-[135px] sm:w-[135px]"
                alt="Atharv"
              />
              <h1 className="mt-2 font-bold text-xl sm:text-2xl">
                {currSpeaker.name}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                {currSpeaker.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <div className="pb-4">
                  <Link href={currSpeaker.socials[0].link}>
                    <FaGlobe size={20} />
                  </Link>
                </div>
                <div>
                  <Link href={currSpeaker.socials[1]?.link ?? '/'}>
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 border-t-2 border-black p-4  flex space-x-2">
            <button className="bg-black text-white px-4 py-2 rounded-2xl flex  space-x-1 items-center h-8 w-24">
              <div>🎤</div>

              <p className="text-sm md:text-base uppercase">Talk</p>
            </button>
            <p className="text-sm sm:text-base">{currSpeaker.talk}</p>
          </div>
        </div>
      )}
    </ModalWrapper>
  )
}

export default Modal
