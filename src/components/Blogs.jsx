import React from 'react'
import { Link } from "react-router-dom"

function Blogs() {

    const blogs=[
      {
        "id":1,
        'title':'Blog 1',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam vero. Reiciendis rerum eveniet expedita nam rem, sit, sunt quo harum temporibus in incidunt. Rerum nulla quos animi eaque atque!',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category':'Atletas',
        'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores!',
        'authorName': 'Paola Eurich',
        'authorImg': 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
        'authorDesc': 'Desenvolvedora',
      },
      {
        "id":2,
        'title':'Blog 2',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam vero. Reiciendis rerum eveniet expedita nam rem, sit, sunt quo harum temporibus in incidunt. Rerum nulla quos animi eaque atque!',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category':'Atletas',
        'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores!',
        'authorName': 'Paola Eurich',
        'authorImg': 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
        'authorDesc': 'Desenvolvedora',
      },
      {
        "id":3,
        'title':'Blog 3',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam vero. Reiciendis rerum eveniet expedita nam rem, sit, sunt quo harum temporibus in incidunt. Rerum nulla quos animi eaque atque!',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category':'Atletas',
        'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores!',
        'authorName': 'Paola Eurich',
        'authorImg': 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
        'authorDesc': 'Desenvolvedora',
      },
      {
        "id":4,
        'title':'Blog 4',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam vero. Reiciendis rerum eveniet expedita nam rem, sit, sunt quo harum temporibus in incidunt. Rerum nulla quos animi eaque atque!',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category':'Atletas',
      },
      {
        "id":5,
        'title':'Blog 5',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam vero. Reiciendis rerum eveniet expedita nam rem, sit, sunt quo harum temporibus in incidunt. Rerum nulla quos animi eaque atque!',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category':'Atletas',
      },
      {
        "id":6,
        'title':'Blog 6',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam vero. Reiciendis rerum eveniet expedita nam rem, sit, sunt quo harum temporibus in incidunt. Rerum nulla quos animi eaque atque!',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category':'Atletas',
      },
    ]

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 gap-8 px-4 text-black'>

          {blogs.map((blog)=>
          
          <Link to={`/blog/${blog.id}`}>
            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md relative'>
              <img className='h-56 w-full object-cover' src={blog.coverImg} />
              <p className="bg-red-300 rounded-xl text-black font-medium flex items-center justify-center text-[14px] w-32 h-7 mt-2 ml-2">{blog.category}</p>
              <div className='p-8'>
                <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                <p className='text-gray-600 text-xl'>{blog.desc}</p>
              </div>
            </div>
          </Link>  
          )}

        </div>
      </div>
    </div>
  )
}

export default Blogs