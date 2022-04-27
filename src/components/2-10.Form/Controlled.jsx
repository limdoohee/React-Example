import React , {useState} from 'react'

export default function Controlled() {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    setValue(event.target.value);
  }

  function handleChange(event) {
    alert("handleChange")
    event.preventDefault();
  }

  return (
    <form onChange={handleSubmit}>
      <label>
        Name : 
        <input type="text" value={value} onChange={handleChange}></input>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}
