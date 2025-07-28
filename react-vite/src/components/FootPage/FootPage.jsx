import {useNavigate}  from 'react-router-dom';
import './FootPage.css';

function FootPage(){
    const navigator = useNavigate()
    const handleNavForm =(e)=>{
        e.preventDefault()
        navigator('/forum')

    }
    return (
        <div className='more-tips-home-page'>
                <div className='more-tips-container'>
                    <button id='more-tips-button' onClick={()=>navigator('/parents-tips')}>
                    new parents
                    </button>
                    <button id='more-tips-button' onClick={()=>navigator('/training-tips')}>
                        training tips
                    </button>
                    <button id='more-tips-button' onClick={()=>navigator('/health-tips')} >
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