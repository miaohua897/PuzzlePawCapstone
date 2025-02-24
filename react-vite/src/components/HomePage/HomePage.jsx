import { useEffect,useState } from 'react';
import './HomePage.css'

function HomePage(){
    const newsPhotos =[
        'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/2498ae5db812410784477ebda1d52497.jpg',
        'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-jozef-feher-356581-1633522.jpg',
        'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-edd1egalaxy-3628100.jpg',
        'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-ilargian-faus-763704-1629780.jpg',
        "https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-valeriya-9157299.jpg"
    ]
    const [currentIndex, setCurrentIndex]= useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev+1)%newsPhotos.length)
        },3600)
        return ()=>clearInterval(interval)
    },[])
    return (
        <div>
            <h1></h1>
            <div className='home-page-image-article-container'>
            <div  className='home-page-main-image'>    
            <img id='home-page-main-img' src={newsPhotos[currentIndex]} />      
            {/* <img id='home-page-main-img' src="https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-lum3n-44775-406014.jpg" /> */}
            </div>
            <h1>Welcome to PuzzlePaw</h1>
          
            <p className='home-page-main-article'>

            Dogs are loyal and loving companions, often referred to as &quot;mans&quot; best friend.&quot; They are domesticated mammals and belong to the Canidae family. Dogs come in various shapes, sizes, and breeds, each with its unique traits and characteristics. Some are energetic and playful, while others are calm and protective. Known for their intelligence, dogs can be trained to perform tasks, assist people with disabilities, or work in areas such as law enforcement and search-and-rescue missions. Their keen sense of smell and hearing makes them invaluable in various roles. Regardless of breed, dogs are known for their unconditional love, providing companionship, comfort, and joy to millions of people around the world.
            Dogs are loyal and loving companions, often referred to as &quot;mans&quot; best friend.&quot; They are domesticated mammals and belong to the Canidae family. Dogs come in various shapes, sizes, and breeds, each with its unique traits and characteristics. Some are energetic and playful, while others are calm and protective. Known for their intelligence, dogs can be trained to perform tasks, assist people with disabilities, or work in areas such as law enforcement and search-and-rescue missions. Their keen sense of smell and hearing makes them invaluable in various roles. Regardless of breed, dogs are known for their unconditional love, providing companionship, comfort, and joy to millions of people around the world.             
            </p>
            </div>
            {/* <div className='more-tips-home-page'>
                <div className='more-tips-container'>
                <button id='more-tips-button'>
                  new parents, what you want to know
                </button>
                <button id='more-tips-button'>
                    training tips
                </button>
                <button id='more-tips-button'>
                    health tips
                </button>
                <button id='more-tips-button'>
                    forum
                </button>

                </div>
            </div> */}
        

        </div>

    )
}
export default HomePage;