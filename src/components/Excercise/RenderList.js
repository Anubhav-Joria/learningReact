// In this challenge, the developer has to create an input field with a button.
// When the button is clicked, the text in the input field should be added below in a list. Moreover, whenever any list item is clicked, it should be removed from the list. 
import React,{useState} from 'react'

function RenderList() {
    const [list, setList] = useState([]);
    const [name, setName] = useState("");

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        setList([...list, name]);
        // localStorage.setItem(list)
        localStorage.setItem('items', JSON.stringify(list));
        const savedItem = localStorage.getItem("items");
        const parsedItem = JSON.parse(savedItem);
        setList(parsedItem)
        setName("");
        // console.log(list);
    }
    const handleDelete = (item, indexToRemove ) =>{
        setList(list.filter((ele, ind)=>{
            return indexToRemove != ind;
        }));
    }
  return (
    <div>
      <form action="/" onSubmit={handleFormSubmit}>
        <input type="text" value={name} onChange = {(e)=>{setName(e.target.value)}} />
        <button type='submit'> submit </button>
      </form>
    <div>
        {
            list.map((element, i)=>{
                return(
                    <ul>
                        <li key={i} onClick={() => {handleDelete(element, i)}}>{element}</li>
                    </ul>
                )
            })
        }
    </div>
    </div>
  )
}

export default RenderList
