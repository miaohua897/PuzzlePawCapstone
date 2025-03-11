import './SearchBar.css';
import {useState} from 'react';

function SearchBar(){
    const [searchUser, setSearchUser] = useState('')
    const [items,setItems] = useState([
        'apple',
        'banana'
    ])

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchUser.toLowerCase())
      );

    return (
        <div>
            <input type='text' value={searchUser} onChange={(e)=>setSearchUser(e.target.value)}></input>
            <ul>
            {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    )

}
export default SearchBar;