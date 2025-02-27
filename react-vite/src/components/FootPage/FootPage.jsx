import './FootPage.css';

function FootPage(){
    const handleUnfinishedFeatures=()=>{
        window.alert('The feature coming soon ^.^')
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
                <button id='more-tips-button' onClick={handleUnfinishedFeatures}>
                    forum
                </button>

                </div>
            </div>
    )
}
export default FootPage;