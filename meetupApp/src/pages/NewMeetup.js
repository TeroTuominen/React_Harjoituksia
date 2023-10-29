import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-meetup-app-fbac7-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/',{replace: true});
        });
    }
    return <section>
        <h1>Add Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />

    </section>;
}

export default NewMeetupPage;