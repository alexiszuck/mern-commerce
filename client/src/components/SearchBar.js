import { useRef } from 'react';
import { SearchCircleIcon } from '@heroicons/react/outline'

function SearchBar() {
  const searchRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchRef.current.value) return


    console.log(`search => ${searchRef.current.value}`)
    searchRef.current.value = ''
  }

  return (
    <form className='flex items-center bg-gray-100 rounded-full my-8 md:w-[40%]'>
      <input ref={searchRef} className="bg-transparent h-12 px-5 focus:outline-none font-poppins sm:w-full" type="text" placeholder="Search..." />
      <SearchCircleIcon className="h-10 pr-1 text-mern-gray cursor-pointer" onClick={handleSearch} />
      <button hidden type='submit' onClick={handleSearch}>Submit</button>
    </form>
  )
}

export default SearchBar