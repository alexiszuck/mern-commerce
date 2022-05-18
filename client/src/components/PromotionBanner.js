import { useState, useEffect } from 'react';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

function PromotionBanner() {
  const [activeBanner, setActiveBanner] = useState(0)

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const slides = document.querySelector('#slides')
        const activeSlide = document.querySelector(`#slide-${activeBanner}`)
        slides.scrollLeft = activeSlide.offsetLeft
      }, 700)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [activeBanner])

  const banners = [
    { banner_id: '1', owner: 'nike', src: '/banner/alexander-rotker-l8p1aWZqHvE-unsplash.jpg' },
    { banner_id: '2', owner: 'nike', src: '/banner/hermes-rivera-dII8zRTK6lo-unsplash.jpg' },
    { banner_id: '3', owner: 'nike', src: '/banner/malvestida-DMl5gG0yWWY-unsplash.jpg' },
    { banner_id: '4', owner: 'nike', src: '/banner/revolt-164_6wVEHfI-unsplash.jpg' },
  ]

  const handleLeftArrow = () => {
    const slides = document.querySelector('#slides')
    if (activeBanner - 1 < 0) {
      const lastSlide = document.querySelector(`#slide-${banners.length - 1}`)
      slides.scrollLeft = lastSlide.offsetLeft
      setActiveBanner(banners.length - 1)
    } else {
      const prevSlide = document.querySelector(`#slide-${activeBanner - 1}`)
      slides.scrollLeft = prevSlide.offsetLeft
      setActiveBanner(prev => prev - 1)
    }
  }

  const handleRightArrow = () => {
    const slides = document.querySelector('#slides')
    if (activeBanner + 1 > banners.length - 1) {
      slides.scrollLeft = 0
      setActiveBanner(0)
    } else {
      const nextSlide = document.querySelector(`#slide-${activeBanner + 1}`)
      slides.scrollLeft = nextSlide.offsetLeft
      setActiveBanner(prev => prev + 1)
    }
  }

  const handleDotIndicators = (e) => {
    const slides = document.querySelector('#slides')
    const slide = document.querySelector(`#slide-${e.currentTarget.dataset.dotIdx}`)
    slides.scrollLeft = slide.offsetLeft
    setActiveBanner(parseInt(e.currentTarget.dataset.dotIdx))
  }

  return <>
    <div className="w-full h-[50vh] ">
      <div className="bg-red-200 h-full relative">
        <ul id="slides" className="m-0 p-0 flex h-full overflow-x-hidden scroll-smooth ">
          {
            banners.map((item, idx) => (
              <li key={item.banner_id} id={`slide-${idx}`} className="w-full shrink-0 grow-0 basis-full" >
                <img src={item.src} alt="" className="w-full h-full object-cover" />
              </li>
            ))
          }
        </ul>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          {/* <div className="font-mono pl-4 pr-5 py-2 text-3xl text-gray-200 bg-mern-dark rounded-full cursor-pointer" onClick={handleLeftArrow}>❮</div>
          <div className="font-mono pl-5 pr-4 py-2 text-3xl text-gray-200 bg-mern-dark rounded-full cursor-pointer" onClick={handleRightArrow}>❯</div> */}
          {/* <div className="text-gray-200 bg-mern-dark rounded-full cursor-pointer p-2" onClick={handleLeftArrow}><ChevronLeftIcon fontSize="large" /></div>
          <div className="text-gray-200 bg-mern-dark rounded-full cursor-pointer p-2" onClick={handleRightArrow}><ChevronRightIcon fontSize="large" /></div> */}
          <div className="text-gray-200 bg-mern-dark rounded-full cursor-pointer p-2" onClick={handleLeftArrow}><ChevronLeftIcon className="h-10"/></div>
          <div className="text-gray-200 bg-mern-dark rounded-full cursor-pointer p-2" onClick={handleRightArrow}><ChevronRightIcon className="h-10"/></div>
        </div>
      </div>
      <div className="carousel_nav flex justify-center items-center w-full space-x-8 mt-2">
        {
          banners.map((item, idx) => (
            <button key={`button${item.banner_id}`} className="carousel_indicator flex" data-dot-idx={idx} onClick={handleDotIndicators}>
              {activeBanner === idx && <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-mern-orange opacity-75"></span>}
              <span className="relative inline-flex rounded-full h-3 w-3 bg-mern-red "></span>
            </button>
          ))
        }
      </div>
    </div>
  </>
}

export default PromotionBanner