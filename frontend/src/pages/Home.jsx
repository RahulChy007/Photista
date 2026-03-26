import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopPhotographers from '../components/TopPhotographers'
import Banner from '../components/Banner'

const Home = () => {
  const [showDevelopmentPopup, setShowDevelopmentPopup] = useState(true)

  useEffect(() => {
    if (!showDevelopmentPopup) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowDevelopmentPopup(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showDevelopmentPopup])

  return (
    <div>
        <AnimatePresence>
          {showDevelopmentPopup && (
            <motion.div
              className='fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/70 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className='relative my-auto w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl max-sm:max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)]'
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className='bg-primary px-6 py-5 text-white sm:px-8'>
                  <p className='text-sm font-semibold uppercase tracking-[0.3em] text-white/80'>
                    Important Update
                  </p>
                  <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>
                    Photista website is currently in development
                  </h2>
                  <p className='mt-3 max-w-xl text-sm leading-6 text-white/90 sm:text-base'>
                    We are actively polishing the web experience. In the meantime, our Android
                    app is already complete, stable, and ready to use for bookings, browsing
                    photographers, and managing appointments.
                  </p>
                </div>

                <div className='space-y-5 px-6 py-6 sm:px-8 sm:py-8'>
                  <div className='rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm leading-6 text-gray-700 sm:text-base'>
                    Download the APK below to start using Photista right away while we continue
                    improving the website experience.
                  </div>

                  <div className='grid gap-3 text-sm text-gray-600 sm:grid-cols-3'>
                    <div className='rounded-2xl border border-gray-200 p-4'>
                      <p className='font-semibold text-gray-900'>Fully Functional App</p>
                      <p className='mt-2'>
                        The Android app is live and ready for real use from day one.
                      </p>
                    </div>
                    <div className='rounded-2xl border border-gray-200 p-4'>
                      <p className='font-semibold text-gray-900'>Faster Access</p>
                      <p className='mt-2'>
                        Browse photographers, check profiles, and book appointments with ease.
                      </p>
                    </div>
                    <div className='rounded-2xl border border-gray-200 p-4'>
                      <p className='font-semibold text-gray-900'>Website Coming Soon</p>
                      <p className='mt-2'>
                        New improvements and a smoother web experience are on the way.
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                    <a
                      href='/Photista-mobile.apk'
                      download='Photista-mobile.apk'
                      className='inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:scale-[1.02] hover:bg-primary/90'
                    >
                      Download Android App
                    </a>
                    <button
                      type='button'
                      onClick={() => setShowDevelopmentPopup(false)}
                      className='inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50'
                    >
                      Continue to Website
                    </button>
                  </div>
                </div>

                <button
                  type='button'
                  onClick={() => setShowDevelopmentPopup(false)}
                  className='absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/25'
                  aria-label='Close popup'
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Header/>
        <SpecialityMenu/>
        <TopPhotographers/>
        <Banner/>
    </div>
  )
}

export default Home
