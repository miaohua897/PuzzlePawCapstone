import {useState}  from 'react';
import {useSelector} from 'react-redux'
import './NewParentsTips.css'
import DndItems from '../DndItems/DndItems';

function NewParentsTips(){
    const [newTip,setNewTip] = useState('');
    const sessionUser = useSelector(state=>state.session.user)
    const [tips, setTips] = useState([
        {id:1,tip:'No. 1 : Dogs thrive on routine, so try to keep feeding times, potty breaks, and walks consistent. This helps them feel secure and understand what to expect throughout the day.'},
        {id:2,tip:'No. 2 : Set up a designated area in your home where your dog can relax, such as a crate or a cozy bed. This gives them a place to retreat when they need some downtime.'},
        {id:3,tip:'No. 3 : Introduce your dog to various people, places, and other animals in a controlled and positive manner. Early socialization can help prevent fear-based behavior as they grow older.'},
        {id:4,tip:"No. 4 : Start basic obedience training early on, using positive reinforcement like treats and praise. Teach commands like sit, stay, and come, and be patient as your dog learns."},
        {id:5,tip:'No. 5 : Dogs love to chew, so providing safe toys and chews can help redirect this natural behavior and keep them from damaging furniture or other household items.'}
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
            <h1>Parents&apos; Tips</h1>
    
            {
                sessionUser?
                <div className='new-tip-container'>
                    <input 
                        type='text'
                        value={newTip}
                        className='new-tip-input'
                        onChange={(e=>setNewTip(e.target.value)) } />
                    <button onClick={handleSubmit} id='add-new-tip'>Add A New Tip for New Parent</button>
                </div>
                : <h2>log in, and add share your tips</h2>
            }
               <DndItems tips={tips} setTips={setTips}/>
        </div>
    )
}
export default NewParentsTips;