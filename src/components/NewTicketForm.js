import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-dom';  //A hook is simply a way to "hook" a piece of state to a functional component.

function NewTicketForm(props){

  const firestore = useFirestore(); //(hook) Allows access to fireStore methods: get(), add(), etc.

  function addTicketToFirestore(event) {
    event.preventDefault();
    props.onNewTicketCreation();

    return firestore.collection('tickets').add(
      {
        names: event.target.names.value,
        location: event.target.location.value, 
        issue: event.target.issue.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addTicketToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;