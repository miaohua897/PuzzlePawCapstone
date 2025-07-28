import {useState}  from 'react';
import {useSelector} from 'react-redux'
import DndItems from '../DndItems';
import './TrainingTips.css'

function TrainingTips(){
    const [newTip,setNewTip] = useState('');
    const sessionUser = useSelector(state=>state.session.user)
    const [tips, setTips] = useState([
        {id:1,tip:'No. 1 Start with Basic Commands'},
        {id:2,tip:'No. 2 Use Positive Reinforcement'},
        {id:3,tip:'No. 3 Consistency is Key Consistency is Key  Consistency is Key  Consistency is Key  Consistency is Key  Consistency is Key' },
        {id:4,tip:"No. 4 Keep Training Sessions Short and Fun"},
        {id:5,tip:'No. 5 Crate training is a great way to help your dog feel secure and establish boundaries. It can also aid with housebreaking.'}
    ])

    const addTip =(tip)=>{
        setTips(tips=>[...tips,{id:tips.length+1,tip}])
    }
 
    const handleSubmit=()=>{
        if(!newTip) return ;
        addTip(newTip)
        setNewTip("")
    }
    return (
        <div>
            <h1>Training Tips</h1>
            {
                sessionUser?
                <div className='new-training-tip-container'>
                <input 
                    type='text'
                    value={newTip}
                    onChange={(e=>setNewTip(e.target.value)) } />                   
                <button onClick={handleSubmit} id='add-new-training-tip'>Add A New Training Tip </button>
                </div>
                : <h2>log in, and add share your tips</h2>
            }
               <DndItems tips={tips} setTips={setTips}/>
        </div>
    )
}
export default TrainingTips;