function PromotionBanner() {

  const banner = [
    { banner_id: '1', owner: 'nike', src: '/banner/alexander-rotker-l8p1aWZqHvE-unsplash.jpg' },
    { banner_id: '2', owner: 'nike', src: '/banner/hermes-rivera-dII8zRTK6lo-unsplash.jpg' },
    { banner_id: '3', owner: 'nike', src: '/banner/malvestida-DMl5gG0yWWY-unsplash.jpg' },
    { banner_id: '4', owner: 'nike', src: '/banner/revolt-164_6wVEHfI-unsplash.jpg' },
  ]

  return (
    <div>
      <div className="carousel w-full sm:h-[50vh]">
        {
          banner.map((item, idx) => (
            <div key={item.banner_id} id={`item${idx}`} className="carousel-item relative w-full">
              <img src={banner[idx].src} className="object-cover w-full" alt={`banner-${idx}`} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#item${idx - 1 < 0 ? banner.length - 1 : idx - 1}`} className="btn btn-circle">❮</a>
                <a href={`#item${idx + 1 > banner.length - 1 ? 0 : idx + 1}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          ))
        }

      </div>
      <div className="flex justify-center items-center w-full space-x-8 mt-2">
        {
          banner.map((item, idx) => (
            <a key={item.banner_id} href={`#item${idx}`} className="flex h-3 w-3">
                {/* <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-mern-orange opacity-75"></span> */}
                <span className="relative inline-flex rounded-full h-3 w-3 bg-mern-red "></span>
            </a>

          ))
        }
      </div>
    </div>


  )
}

export default PromotionBanner