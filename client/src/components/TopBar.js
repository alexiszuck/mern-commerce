import { GiftIcon } from '@heroicons/react/solid'
import { ShoppingBagIcon, UserIcon, MenuAlt2Icon } from '@heroicons/react/outline'

function TopBar() {
  const handleTopPromo = () => {
    console.log('open top promo')
  }
  const handleCart = () => {
    console.log('open cart')
  }

  const handleUser = () => {
    console.log('open user profile')
  }

  const handleMenu = () => {
    console.log('drop menu')
  }

  const handleLinkHome = () => {
    console.log('link home')
  }

  const handleLinkCategories = () => {
    console.log('link categories')
  }

  const handleLinkContact = () => {
    console.log('link contact')
  }

  const handleLinkSupport = () => {
    console.log('link support')
  }

  return (
    <div className="sticky top-0 z-50 flex flex-col items-center font-poppins">
      <div className="hidden sm:flex items-center justify-center bg-neutral-900 h-8 w-screen" onClick={handleTopPromo}>
        <GiftIcon className="h-5 w-5 text-white mr-1 pb-1 cursor-pointer" /><span className="font-bold text-white text-xs cursor-pointer">FREE SHIPPING ON ORDER OF 50 DOLLARS</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 h-14 w-screen text-white text-sm bg-gradient-to-r from-mern-red to-mern-orange shadow-mern-orange shadow-sm ">
        <div className="flex items-center justify-left sm:justify-center">
          <MenuAlt2Icon className="h-6 pl-4 cursor-pointer sm:hidden" onClick={handleMenu} />
          <div className="hidden sm:block cursor-pointer text-mern-gray font-bold text-xl md:text-2xl">
          M <span className="font-normal">|</span> E <span className="font-normal">|</span> R <span className="font-normal">|</span> N
          </div>
        </div>

        <div className="hidden sm:col-span-2 lg:col-span-1 sm:flex items-center justify-between">
          <div className="cursor-pointer" onClick={handleLinkHome}>Home</div>
          <div className="cursor-pointer" onClick={handleLinkCategories}>Categories</div>
          <div className="cursor-pointer" onClick={handleLinkContact}>Contact</div>
          <div className="cursor-pointer" onClick={handleLinkSupport}>Support</div>
        </div>
        <div className="flex items-center justify-end sm:justify-center space-x-4 pr-4 sm:pr-0">
          <div className="p-2 rounded-full bg-mern-gray cursor-pointer" onClick={handleCart} >
            <ShoppingBagIcon className="h-5 text-white" />
          </div>
          <div className="p-2 rounded-full bg-mern-gray cursor-pointer" onClick={handleUser} >
            <UserIcon className="h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar