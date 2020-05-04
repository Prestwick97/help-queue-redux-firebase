import * as c from './../actions/ActionTypes';

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
})

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});