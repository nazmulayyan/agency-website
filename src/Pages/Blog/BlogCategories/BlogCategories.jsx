import { BsChevronRight } from 'react-icons/bs';

const BlogCategories = ({ categoriesName }) => {
    return (
        <div className='bg-[#363D47] text-white hover:text-[#363D47] hover:bg-white flex justify-between items-center px-5 py-5 rounded-md'>
            <p className='font-bold font-mulish text-base'>{categoriesName}</p>
            <BsChevronRight className='text-lg font-bold' />
        </div>
    )
}

export default BlogCategories