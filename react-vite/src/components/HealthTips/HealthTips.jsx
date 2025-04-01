import {useState}  from 'react';
import {useSelector} from 'react-redux'
import { DndContext,KeyboardSensor, PointerSensor, useSensor,useSensors, closestCorners} from "@dnd-kit/core";
import { SortableContext,verticalListSortingStrategy, horizontalListSortingStrategy} from '@dnd-kit/sortable';
import {arrayMove, sortableKeyboardCoordinates} from '@dnd-kit/sortable';
import SortTipsList from '../SortTipsList';
import './HealthTips.css';

function HealthTips(){
    const [newTip,setNewTip] = useState('');
    const [isVertical,setIsVertical] = useState(true);
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
            <h1>Health Tips</h1>
            <button className='vertical-horizontal-button' onClick={()=>setIsVertical(true)}>Vertical</button>
            <button className='vertical-horizontal-button' onClick={()=>setIsVertical(false)}>Horizontal</button>
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
export default HealthTips;