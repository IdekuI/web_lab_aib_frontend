import React from "react";
import styled from "styled-components";
import moment from "moment";

const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-gap: 2px;
background-color:${props => props.isHeader ? '#393939' : '#4D4D4D'}; 
${props => props.isHeader && 'border-bottom: 2px solid #464646'}
`;

const CellWrapper = styled.div`
min-width: 140px;
min-height: ${props => props.isHeader ? 24 : 80}px;
background-color: ${props => props.isWeekend ? '#434343' : '#393939'};
color: ${props => props.isSelectedMonth ? '#dddcdd' : '#6D6D6D'};
`;

const RowInCell = styled.div`
display: flex;
flex-direction: column;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
${props => props.pr && `padding-right: ${props.pr * 4}px`}
`;

const DayWrapper = styled.div`
height: 33px;
width: 33px;
display: flex;
align-items: center;
justify-content: center;
margin: 2px;
cursor: pointer;
`;

const CurrentDay = styled('div')`
height: 100%;
width: 100%;
background-color: red;
display: flex;
border-radius: 50%; 
align-items: center;
justify-content: center;
`;

const ShowDayWrapper = styled('div')`
display: flex;
justify-content: flex-end;
`;

const EventListWrapper = styled('ul')`
margin: unset;
list-style-position: inside;
padding-left: 4px;
`;

const EventItemWrapper = styled('button')`
position: relative;
left: -14px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
width: 114px;
border: unset;
background:unset;
color: #DDDDDD;
cursor: pointer;
margin: 0;
padding: 0;
text-align: left;
`;

const CalendarGrid = ({startDay, today, totalDays, events, openFormHandler}) => {

const day = startDay.clone().subtract(1,'day');
const daysArray = [...Array(totalDays)].map(() => day.add(1,'day').clone());
const isCurrentDay = (day) => moment().isSame(day, 'day');
const isSelectedMonth = (day) => today.isSame(day, 'month');
return (
  <>
    <GridWrapper isHeader>
        {[...Array(7)].map((_, i) => (
            <CellWrapper isHeader isSelectedMonth key={i}>
                <RowInCell justifyContent = {'flex-end'} pr={1}>
                    {moment().day(i+1).format('ddd')}
                </RowInCell>
            </CellWrapper>
        ))}
    </GridWrapper>
    <GridWrapper>
        {
          daysArray.map((dayItem) =>(
            <CellWrapper
                isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                key = {dayItem.unix()}
                isSelectedMonth = {isSelectedMonth(dayItem)}
            >
              <RowInCell justifyContent = {'flex-end'}>
                <ShowDayWrapper>
                  <DayWrapper onDoubleClick={() => openFormHandler('Create', null, dayItem)}>
                    {isCurrentDay(dayItem) ? (<CurrentDay>{dayItem.format('D')}</CurrentDay>) : (dayItem.format('D'))}
                  </DayWrapper>
                </ShowDayWrapper>
                <EventListWrapper>
                  {
                    events.filter(event => event.date >= dayItem.format('X') &&
                    event.date <= dayItem.clone().endOf('day').format('X'))
                    .map(event => (
                    <li key = {event.id}>
                      <EventItemWrapper onDoubleClick={() => openFormHandler('Update', event)}>
                        {event.title}
                      </EventItemWrapper>
                    </li>
                    ))
                  }
                </EventListWrapper>
              </RowInCell>
            </CellWrapper>
          ))
        }
    </GridWrapper>
  </>
)}

export { CalendarGrid };