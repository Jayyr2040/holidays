const Show = ({ holiday }) => {
    if (holiday === null) {
      return null;  
    }
  
    const celebrated = holiday.celebrated ? "Yes" : "No";
  
    return (
      <div>
        <h2>{holiday.name}</h2>
        <h3>Celebrated: {celebrated}</h3>
        <p>{holiday.description}</p>
        <p>Likes: {holiday.likes}</p>
        <ul>
          {holiday.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Show;