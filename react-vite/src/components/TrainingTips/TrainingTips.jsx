import {useState}  from 'react';
import {useSelector} from 'react-redux'
import { DndContext,KeyboardSensor, PointerSensor, useSensor,useSensors, closestCorners} from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy} from '@dnd-kit/sortable';
import {arrayMove, sortableKeyboardCoordinates} from '@dnd-kit/sortable';
import SortTipsList from './SortTipsList'
import './TrainingTips.css'

function TrainingTips(){
    const [newTip,setNewTip] = useState('')
    const sessionUser = useSelector(state=>state.session.user)
    // console.log(sessionUser)
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
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor,{
            coordinateGetter:sortableKeyboardCoordinates
        })
    )
    const getTipPos =(id)=>tips.findIndex(el=>el.id ===id);

    const handleDragEnd = (event)=>{
        const {active, over} = event;
        if (active.id === over.id) return ;
        setTips(tips=>{
            const originalPosition = getTipPos(active.id)
            const newPosition = getTipPos(over.id)
            return arrayMove(tips,originalPosition,newPosition)
        })
    }
    const handleSubmit=()=>{
        if(!newTip) return ;
        addTip(newTip)
        setNewTip("")
    }
    return (
        <div>
            <h1>Parents&apos; Tips</h1>
            {/* <Input onSubmit ={addTip}></Input> */}
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
            <h3>Drag N Drop, its&apos; fun</h3>
            <DndContext 
               sensors ={sensors}
               collisionDetection ={closestCorners}
               onDragEnd={handleDragEnd} >
                {/* < Column tips ={tips} /> */}
                <div className='training-tips-drag-drop-container'>
                    <SortableContext items ={tips} strategy={horizontalListSortingStrategy} >
                        {
                            tips.map((tip,index)=>
                                <SortTipsList key={index} id ={tip.id} tip ={tip.tip} />
                            )
                        }
                    </SortableContext>
                </div>
               </DndContext>
        </div>
    )
}
export default TrainingTips;