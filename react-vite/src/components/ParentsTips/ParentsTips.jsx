import {useState}  from 'react';
import { DndContext,KeyboardSensor, PointerSensor, useSensor,useSensors, closestCorners} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy,} from '@dnd-kit/sortable';
import {arrayMove, sortableKeyboardCoordinates} from '@dnd-kit/sortable';

import SortTipsList from './SortTipsList'
import './ParentsTips.css'

function ParentsTips(){
    const [newTip,setNewTip] = useState('')
    const [tips, setTips] = useState([
        {id:1,tip:'tip1'},
        {id:2,tip:'tip2'},
        {id:3,tip:'tip3'}
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
            const originalPos = getTipPos(active.id)
            const newPos = getTipPos(over.id)
            return arrayMove(tips,originalPos,newPos)
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
                <div>
                <input 
                    type='text'
                    value={newTip}
                    onChange={(e=>setNewTip(e.target.value)) } />
                <button onClick={handleSubmit} >Add A New Tip for New Parent</button>
                </div>
            <DndContext 
               sensors ={sensors}
               collisionDetection ={closestCorners}
               onDragEnd={handleDragEnd} >
                {/* < Column tips ={tips} /> */}
                <div>
                    <SortableContext items ={tips} strategy={verticalListSortingStrategy} >
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
export default ParentsTips;