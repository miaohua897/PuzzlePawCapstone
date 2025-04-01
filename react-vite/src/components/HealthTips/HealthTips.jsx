import {useState}  from 'react';
import {useSelector} from 'react-redux'
import './HealthTips.css';
import DndItems from '../DndItems';

function HealthTips(){
    const [newTip,setNewTip] = useState('');
    const sessionUser = useSelector(state=>state.session.user)
    const [tips, setTips] = useState([
        {id:1,tip:'No. 1 '},
        {id:2,tip:'No. 2 '},
        {id:3,tip:'No. 3 ' },
        {id:4,tip:"No. 4 "},
        {id:5,tip:'No. 5  '}
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