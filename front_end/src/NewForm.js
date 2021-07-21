const NewForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/holidays", {
          method: "POST",
          body: JSON.stringify({ name: event.target.name.value }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            props.handleAddHoliday(resJson);
          })
          .catch((error) => console.error({ Error: error }));
      }

/*
same as above fetch actually
curl 
-X POST 
-H "Content-Type: application/json" 
-d '{"name":"World Kindness"}' 
http://localhost:3003/holidays

*/

      // fetch("/holidays", {method: "POST"}) basic

      //const handleSubmit = (event) => {
//      event.preventDefault();
// event.preventDefault();
// const title = event.target.elements.title.value
     // }

    return (    
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Holiday:</label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="add a holiday"
        />
        <input type="submit" value="Add a Reason to Celebrate" />
        </form>
    </div>
    )
}

export default NewForm;