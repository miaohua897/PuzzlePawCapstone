import {useSortable} from '@dnd-kit/sortable';
import {CSS}  from '@dnd-kit/utilities';
import './SortTipsList.css'

const SortTipsList =({id, tip,isVertical})=>{

    const {attributes, listeners, setNodeRef, transform, transition,isDragging} = useSortable({id})

    return (
        <div  ref ={setNodeRef}
                style ={{
                    color:isDragging? 'brown':'black',
                    backgroundColor:isDragging? 'lightblue':'white',
                    transition,
                    transform:CSS.Transform.toString(transform)
                }}
                {...attributes}
                {...listeners} 
                 className={isVertical?'drag-drop-card':'horizontal-drag-drop-card'}
                >
            <p id='tip'>{tip}</p> 
        </div>
    )
}
export default SortTipsList