import { useEffect,useState } from 'react';
import { useSelector} from 'react-redux';
import MovingImages from '../MovingImages'
import './HomePage.css'
import './HomePageMedia.css'

function HomePage(){

    const newsPhotosObj = useSelector(state=>state.newsPhoto.newsPhoto);
    const [currentIndex, setCurrentIndex]= useState(0);
    const [isWord, setIsWord] = useState(null)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev+1)% newsPhotos.length)
        },3600)
        return ()=>clearInterval(interval)
    },[])

    let newsPhotos = [
        'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1124002.jpg',
        'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-65928.jpg',
        'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1562983.jpg']

    const mainArticle ="Dogs are loyal and loving companions, often referred to as &quot;mans&apos;  best friend.&quot; They are domesticated mammals and belong to the Canidae family.Dogs come in various shapes, sizes, and breeds, each with its unique traits and characteristics. Some are energetic and playful, while others are calm and protective. Known for their intelligence, dogs can be trained to perform tasks, assist people with disabilities, or work in areas such as law enforcement and search-and-rescue missions. Their keen sense of smell and hearing makes them invaluable in various roles. For example, police dogs are often used to detect drugs or explosives, while therapy dogs provide emotional support to people in hospitals or nursing homes. Service dogs help individuals with physical or mental challenges,  offering independence and assistance in daily activities. Many people consider their dogs not just pets, but family members, and the connection between humans and dogs goes back thousands of years.  Whether its&apos; a loyal dog greeting you at the door, cuddling on the couch, or playing in the yard, the companionship they offer is truly unmatched."
    const mainArticleArr = mainArticle.split(' ');
    if(newsPhotosObj) {
        for (let i =0; i < Object.values(newsPhotosObj).length;i++)
        newsPhotos.push(Object.values(newsPhotosObj)[i].image_url);
    }

    return (
        <div className='homepage-container'>
                <div className='home-page-image-article-container'>
                     <h1 className='homepage-welcome-title'>Welcome to PuzzlePaw</h1>
                    <div  className='home-page-main-image'>    
                    <img id='home-page-main-img' src={newsPhotos[currentIndex]} />      
                    </div>
            

                    <p id ='article-tip'>hover the article, it is fun</p>
                    <div>
                                          {
                        mainArticleArr.map((word,index)=>{
                            return (
                             
                                    <a key={index} 
                                    onMouseEnter={()=>setIsWord(index)}
                                    onMouseLeave={()=>setIsWord(null)}
                                    className={isWord===index?'home-page-main-article-large-size':'home-page-main-article'}>{word+' '}</a>                          
                            )
                        })
                    }
                    </div>                   
                </div>
            < MovingImages />
        </div>
    )
}
export default HomePage;