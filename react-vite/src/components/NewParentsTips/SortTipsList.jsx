import {useSortable} from '@dnd-kit/sortable';
// import { useState } from 'react';
import {CSS}  from '@dnd-kit/utilities';

const SortTipsList =({id, tip})=>{

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
                 className='drag-drop-card'
                >
            <p id='tip'>{tip}</p> 
        </div>
    )
}
export default SortTipsList