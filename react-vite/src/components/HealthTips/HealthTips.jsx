import {useState}  from 'react';
import {useSelector} from 'react-redux'
import DndItems from '../DndItems';
import MovingImages from '../MovingImages';
import './HealthTips.css';

function HealthTips(){
    const [newTip,setNewTip] = useState('');
    const sessionUser = useSelector(state=>state.session.user)
    const [tips, setTips] = useState([
        {id:1,tip:'No.1 Try daily walks, fetch, or even puzzle games to keep them active.'},
        {id:2,tip:'No.2 Avoid giving your dog table scraps or foods that are toxic to dogs (e.g., chocolate, grapes, onions)'},
        {id:3,tip:"No.3 If you're out in hot weather, be sure to bring water for your dog during walks or playtime." },
        {id:4,tip:"No.4 Schedule annual check-ups or as recommended by your vet."},
        {id:5,tip:"No.5 Teach your dog new tricks or rotate their toys to keep them engaged."}
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
        <div className='health-tips-wrapper'>
            <h1>Health Tips</h1>
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
            <MovingImages />
        </div>
    )
}
export default HealthTips;