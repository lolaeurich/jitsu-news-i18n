import React from 'react'
import { useParams } from "react-router-dom"
import Markdown from "react-markdown"

const Content = ({blogs}) => {
    const {id} = useParams()

    let blog={}
    if(blog){
        let arr = blogs.data.filter(blog=> blog.id == id)
        blog=arr[0]
    }else{
        blog={}
    }

    console.log("Blog Object")
    console.log(blogs)

    /*const blogs=[{
        "id":1,
        'title': 'Primeira Postagem do Blog',
        'desc':'Descubra mais sobre este conteúdo.',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category': 'Atletas',
        'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores!',

        'authorName': 'Paola Eurich',
        'authorImg': 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
        'authorDesc': 'Desenvolvedora',
    },
    {
        "id":2,
        'title': 'Segunda Postagem do Blog',
        'desc':'Descubra mais sobre este conteúdo.',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category': 'Atletas',
        'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores!',

        'authorName': 'Paola Eurich',
        'authorImg': 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
        'authorDesc': 'Desenvolvedora',
    },
    {
        "id":3,
        'title': 'Terceira Postagem do Blog',
        'desc':'Descubra mais sobre este conteúdo.',
        'coverImg':'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg',
        'category': 'Atletas',
        'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam quos, eos culpa dolorem molestias voluptatibus, fuga laborum itaque repellendus nobis? Ipsum, temporibus recusandae nisi a repellendus saepe reprehenderit asperiores!',

        'authorName': 'Paola Eurich',
        'authorImg': 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
        'authorDesc': 'Desenvolvedora',
    },
]

    let blog = blogs.filter(blog=> blog.id == id)
    blog = blog[0]*/

  return (

   <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-2'>
                <p className='bg-red-300 rounded-xl text-black font-medium flex items-center justify-center text-[14px] w-32 h-7 mt-2 ml-0 mb-4'>{blog.attributes.category}</p>
                    <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}></img>
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                    <div className='pt-5'><Markdown className='line-break'>{blog.attributes.blogContent}</Markdown></div>
                </div>

                <div className='items-center w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                    <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
                        <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
                    </div>
                </div>

            </div>
        </div>
  </div>
  )
}

export default Content