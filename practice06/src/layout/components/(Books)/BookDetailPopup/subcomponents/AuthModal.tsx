import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, ReactElement } from 'react'
import Image from 'next/image'
import GoogleIcon from '@/layout/assets/images/google.svg'
import { X } from '@phosphor-icons/react'

export function AuthModal({ children }: { children: ReactElement }) {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div
        onClick={openModal}
        className="cursor-pointer"
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className="flex min-h-full items-center justify-center p-4 text-center"
              style={{ background: 'rgba(0, 0, 0, 0.1)' }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden bg-Gray-700 py-14 px-[4.5rem] text-left align-middle shadow-xl transition-all absolute"
                  style={{ padding: '3.5rem 4.5rem' }}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 relative"
                    style={{ top: '-2.5rem', right: '-3rem' }}
                    onClick={closeModal}
                  >
                    <div
                      className="flex justify-end items-center flex-wrap"
                      style={{ justifyContent: 'flex-end' }}
                    >
                      <span
                        onClick={closeModal}
                        className="cursor-pointer text-Gray-400 top-2 hover:text-Gray-300"
                        style={{ cursor: 'pointer' }}
                      >
                        <X size={24} />
                      </span>
                    </div>
                  </Dialog.Title>
                  <div className="text-center">
                    <strong className="text-Gray-200">
                      Faça login para deixar sua avaliação
                    </strong>
                  </div>

                  <div className="mt-4">
                    <button className="w-full bg-Gray-600 rounded-lg flex items-center gap-x-5 text-Gray-200 py-5 px-6">
                      <Image
                        src={GoogleIcon}
                        width={32}
                        height={32}
                        alt="Logo do Google"
                      />
                      <strong>Entrar com Google</strong>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
