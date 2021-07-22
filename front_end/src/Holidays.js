import * as React from 'react';
import Show from './Show';
import UpdateForm from './UpdateForm'

const Holidays = (props) => {

    const [holiday, setHoliday] = React.useState(null);

    React.useEffect(() => {
        fetch("/holidays")
          .then(
            (data) => data.json(),
            (err) => console.log(err)
          )
          .then(
            (parsedData) => props.setHoliday(parsedData),
            (err) => console.log(err)
    
          );
      }, []);

    const deleteHoliday = (id) => {
        fetch("/holidays/" + id, {
          method: "DELETE",
        }).then((response) => {
          props.setHoliday(props.holidays.filter((day) => day._id !== id));
        });
      };

      const toggleCelebrated = (holiday) => {
        fetch("/holidays/" + holiday._id, {
          method: "PUT",
          body: JSON.stringify({ celebrated: !holiday.celebrated }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            props.setHoliday(
                props.holidays.map((holiday) => {
                if (holiday._id === resJson._id) {
                  return resJson;
                }
                return holiday;
              })
            );
            if (holiday._id === resJson._id) {
                setHoliday(resJson);
            }
          });
      };

      const increaseLikes = (holiday) => {
        fetch("/holidays/" + holiday._id, {
          method: "PUT",
          body: JSON.stringify({ likes: (holiday.likes + 1) }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            props.setHoliday(
                props.holidays.map((holiday) => {
                if (holiday._id === resJson._id) {
                  return resJson;
                }
                return holiday;
              })
            );
            if (holiday._id === resJson._id) {
                setHoliday(resJson);
            }
          });
      };

      const toggleUpdateForm = (holiday) => {
          return (  <UpdateForm holiday={holiday}/>)
      };
    
    return (
     <>
     <table style={{border:"1px solid"}}>
            <tbody>
                    <tr>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Add Likes</th>
                            <th>Edit</th>
                            <th>Removed?</th>
                    </tr>
                        {props?.holidays?.map((holiday) => {
                        return (
                    <tr style={{cursor: "pointer"}} key={holiday._id} onMouseOver={()=>setHoliday(holiday)}>
                            <td onDoubleClick={() => toggleCelebrated(holiday)} className={holiday.celebrated ? "celebrated" : null}> {holiday.name} Day</td>
                            <td> {holiday.likes}</td>
                            <td onClick={() => increaseLikes(holiday)}> <img src="https://www.kidzpartystore.com/img/c/12.jpg" alt="" width="20px" /></td>
                            <td><img src="https://previews.123rf.com/images/juliarstudio/juliarstudio1601/juliarstudio160100759/50501423-pencil-with-eraser-cartoon-icon-isolated-on-a-white-background.jpg" alt="pencil"  width="20px" onClick={() => toggleUpdateForm(holiday)}/></td>
                            <td style={{cursor: "pointer"}} onClick={() => deleteHoliday(holiday._id)}> X</td>
                    </tr >
                            );
                        })}
            </tbody>
    </table>

    <Show holiday={holiday} />
    </>
    )
}
export default Holidays