import {useState}  from 'react';
import { DndContext,KeyboardSensor, PointerSensor, useSensor,useSensors, closestCorners} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy,horizontalListSortingStrategy} from '@dnd-kit/sortable';
import {arrayMove, sortableKeyboardCoordinates} from '@dnd-kit/sortable';
import SortTipsList from '../SortTipsList/SortTipsList'
import './DndItems.css';


function DndItems({tips,setTips}){
    const [isVertical,setIsVertical] = useState(true)
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor,{
            coordinateGetter:sortableKeyboardCoordinates
        })
    )
    const getTipPosition =(id)=>tips.findIndex(el=>el.id ===id);

    const handleDragEndFunc = (event)=>{
        const {active, over} = event;
        if (active.id === over.id) return ;
        setTips(tips=>{
            const originalPosition = getTipPosition(active.id)
            const newPosition = getTipPosition(over.id)
            return arrayMove(tips,originalPosition,newPosition)
        })
    }
    return (
        <div>
            <h3>Drag N Drop, its&apos; fun</h3>
            <button className='vertical-horizontal-button' onClick={()=>setIsVertical(true)}>Vertical</button>
            <button className='vertical-horizontal-button' onClick={()=>setIsVertical(false)}>Horizontal</button>
            <DndContext 
               sensors ={sensors}
               collisionDetection ={closestCorners}
               onDragEnd={handleDragEndFunc} >
                <div className={isVertical?'drag-drop-container':'training-tips-drag-drop-container'}>
                    <SortableContext items ={tips} strategy={isVertical?verticalListSortingStrategy:horizontalListSortingStrategy} >
                        {
                            tips.map((tip,index)=>
                                <SortTipsList key={index} id ={tip.id} tip ={tip.tip} isVertical={isVertical} />
                            )
                        }
                    </SortableContext>
                </div>
               </DndContext>
        </div>
    )
}
export default DndItems;