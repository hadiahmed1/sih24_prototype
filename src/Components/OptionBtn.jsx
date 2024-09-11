const OptionBtn = ({img,color,txt,setBtn}) => {
  const handleOptionClick = () => {
    setBtn(txt); 
  };
  return (
    <button onClick={handleOptionClick} style={{background:color}} className="icon">
        <img src={img}></img>
        <h1>{txt}</h1>
    </button>
  )
}

export default OptionBtn