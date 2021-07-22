const Show = (props) => {
    if (props.holiday === null) {
      return null;  
    }
  
    const celebrated = props.holiday.celebrated ? "Yes" : "No";
  
    const handleClick = () => {
      props.increaseLikes(props.holiday)
    }
    return (
      <div>
        <h2>{props.holiday.name}</h2>
        <h3>Celebrated: {celebrated}</h3>
        <p>{props.holiday.description}</p>
        <p>Likes: {props.holiday.likes}</p>
        <button onClick={handleClick}>Like </button>
        <ul>
          {props.holiday.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Show;