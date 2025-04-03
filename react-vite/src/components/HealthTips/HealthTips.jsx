import {useState}  from 'react';
import {useSelector} from 'react-redux'
import './HealthTips.css';
import DndItems from '../DndItems';

function HealthTips(){
    const [newTip,setNewTip] = useState('');
    const sessionUser = useSelector(state=>state.session.user)
    const [tips, setTips] = useState([
        {id:1,tip:'Try daily walks, fetch, or even puzzle games to keep them active.'},
        {id:2,tip:'Avoid giving your dog table scraps or foods that are toxic to dogs (e.g., chocolate, grapes, onions)'},
        {id:3,tip:"If you're out in hot weather, be sure to bring water for your dog during walks or playtime." },
        {id:4,tip:"Schedule annual check-ups or as recommended by your vet."},
        {id:5,tip:"Teach your dog new tricks or rotate their toys to keep them engaged."}
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
        </div>
    )
}
export default HealthTips;