import React from "react";
// import ReactDOM from "react-dom";
// import HTML5Backend from "react-dnd-html5-backend";
// import { DragDropContext } from "react-dnd";
import BigCalendar from "react-big-calendar";
// import 'moment-timezone';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";

BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };

    this.moveEvent = this.moveEvent.bind(this);
  }

  componentDidMount() {
    let tempEvents = [];
    for (let activity of this.props.data.activity_periods) {
      console.log(this.props.data.tz);
      tempEvents.push({
        title: 'activity',
        allDay: false,
        start: moment(activity.start_time, "lll").toDate(),
        end: moment(activity.end_time, "lll").toDate(),
      });
    }
    console.log(tempEvents);
    this.setState({ events: tempEvents });
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents,
    });
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state.events;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });
  };

  render() {
    return (
      <DragAndDropCalendar
        selectable
        style={{ height: 400, width: 560 }}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        defaultView={BigCalendar.Views.MONTH}
        defaultDate={new Date(2021, 3, 12)}
      />
    );
  }
}

export default Calendar;
