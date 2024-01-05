import moment from "moment";
import { Header } from "../Header";
import { Monitor } from "../Monitor";
import { CalendarGrid } from "../CalendarGrid";
import styled from "styled-components";
import React, { useEffect, useState } from "react";



const ShadowWrapper = styled('div')`
  border: 2px solid #464646;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

const FormPositionWrapper = styled('div')`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;  
`;

const FormWrapper = styled(ShadowWrapper)`
  width: 320px;
  background-color: #1e1f21;
  color: #DDDDDD;
  box-shadow: unset;
`;

const EventTitle = styled('input')`
  padding: 8px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464646;
`;

const EventBody = styled('textarea')`
    padding: 8px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464646;
  resize: none;
  height: 60px;
`;

const ButtonsWrapper = styled('div')`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;

const url = 'http://localhost:5000';
const totalDays = 42;
const defaultEvent = {
  title: '',
  descriptions: '',
  date: moment().format('X')
}

function App() {

  moment.updateLocale('en', {week: {dow: 1}});

  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');
  
  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  const [method, setMethod] = useState(null);
  const [events, setEvents] = useState([]);
  const [isShowForm, setShowForm] = useState(false);
  const [event, setEvent] = useState(null);

  const startDayQuery = startDay.clone().format('X');
  const endDayQuery = startDay.clone().add(totalDays, 'days').format('X');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDayQuery}&date_lte=${endDayQuery}`)
    .then(res => res.json())
    .then(res => {
      console.log('Response', res);
      setEvents(res);
    });
  }, [today])

  const openFormHandler = (methodName, eventFormUpdate, dayItem) => {
    console.log('click', methodName);
    setShowForm(true);
    setEvent(eventFormUpdate || {...defaultEvent, date: dayItem.format('X')});
    setMethod(methodName);
  }

  const cancelButtonHandler = () => {
    setShowForm(false);
    setEvent(null);
  }

  const changeEventHandler = (text, field) => {
    setEvent(prevState => ({
      ...prevState,
      [field] : text
    }))
  }

  const eventFetchHandler = () => {
    const FetchUrl = method === 'Update' ? `${url}/events/${event.id}` : `${url}/events`;
    const httpMethod = method === 'Update' ? 'PATCH' : 'POST';

    fetch(FetchUrl, {
      method: httpMethod,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(event)
    })
    .then(res => res.json())
    .then(res => {
      if(method === 'Update'){
        setEvents(prevState => prevState.map(eventEl => eventEl.id === res.id ? res : eventEl))
      } else {
        setEvents(prevState => [...prevState, res]);
      }
      cancelButtonHandler();
    })
  }

  const deleteEventHandler = () => {
    const FetchUrl = `${url}/events/${event.id}`;
    const httpMethod = 'DELETE';

    fetch(FetchUrl, {
      method: httpMethod,
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(res => {
      setEvents(prevState => prevState.filter(eventEl => eventEl.id !== event.id));
      cancelButtonHandler();
    })

  }

  return (
    <>
      {
        isShowForm ? (
          <FormPositionWrapper onClick={cancelButtonHandler}>
            <FormWrapper onClick={e => e.stopPropagation()}>
              <EventTitle
                value={event.title}
                onChange={e => changeEventHandler(e.target.value, 'title')}
                placeholder="Title"
              />
              <EventBody
                value={event.descriptions}
                onChange={e => changeEventHandler(e.target.value, 'descriptions')}
                placeholder="Descriptions"
              />
              <ButtonsWrapper>
                <button onClick={cancelButtonHandler}>Cancel</button>
                <button onClick={eventFetchHandler}>{method}</button>
                {
                  method === 'Update' ? (
                    <button onClick={deleteEventHandler}>Delete</button>
                  ) : null
                }
                
              </ButtonsWrapper>
            </FormWrapper>
          </FormPositionWrapper>
        ) : null
      }
      <ShadowWrapper>
      <Header />
      <Monitor 
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid 
        startDay={startDay}
        today={today}
        totalDays={totalDays}
        events={events}
        openFormHandler={openFormHandler}
      />
      </ShadowWrapper>
    </>
  );
}

export default App;