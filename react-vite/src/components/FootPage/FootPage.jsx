import {useNavigate}  from 'react-router-dom';
import './FootPage.css';

function FootPage(){
     const navigator = useNavigate()
    const handleUnfinishedFeatures=()=>{
        window.alert('The feature coming soon ^.^')
    }
    const handleNavForm =(e)=>{
        e.preventDefault()
        navigator('/forum')

    }
    return (
        <div className='more-tips-home-page'>
                <div className='more-tips-container'>
                    <button id='more-tips-button' onClick={handleUnfinishedFeatures}>
                    new parents
                    </button>
                    <button id='more-tips-button' onClick={handleUnfinishedFeatures}>
                        training tips
                    </button>
                    <button id='more-tips-button' onClick={handleUnfinishedFeatures} >
                        health tips
                    </button>
                    <button id='more-tips-button' onClick={handleNavForm}>
                        forum
                    </button>
                </div>
        </div>
    )
}
export default FootPage;