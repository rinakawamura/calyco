import { Calendar } from "react-native-calendars";
import React, { Component } from "react";
import { View } from "react-native";

class CalendarEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  getPublicEvents = events => {
    const publicEvents = [];
    events.forEach(event => {
      if (event.public) {
        publicEvents.push(event);
      }
    });

    return publicEvents;
  };

  fetchEventData = async () => {
    try {
      const tempEvents = this.props.user.events.items;
      if (!this.props.loggedIn) {
        const publicEvents = this.getPublicEvents(tempEvents);
        this.setState({ events: publicEvents });
      } else {
        this.setState({ events: tempEvents });
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.fetchEventData();
  }

  parseEvents = events => {
    const listOfMarkedDates = {};
    events.forEach(event => {
      listOfMarkedDates[event.start_datetime.substring(0, 10)] = {
        marked: true,
        dotColor: "#5a5757",
        // startingDay: true,
        color: "#f4a95d"
      };
    });

    events.forEach(event => {
      const daysSpan =
        event.end_datetime.substring(8, 10) -
        event.start_datetime.substring(8, 10);
      if (daysSpan == 0) {
        listOfMarkedDates[event.start_datetime.substring(0, 10)] = {
          marked: true,
          dotColor: "#5a5757",
          // startingDay: true,
          // endingDay: true,
          color: "#f4a95d"
        };
        return listOfMarkedDates;
      }
      for (let i = 0; i < daysSpan - 1; i++) {
        let newDate =
          event.start_datetime.substring(0, 8) +
          (parseInt(event.start_datetime.substring(8, 10)) + i + 1).toString();
        listOfMarkedDates[newDate] = {
          color: "#f4a95d"
        };
      }
      if (
        Object.keys(listOfMarkedDates).includes(
          event.end_datetime.substring(0, 10)
        )
      ) {
        listOfMarkedDates[event.end_datetime.substring(0, 10)] = {
          marked: true,
          dotColor: "#5a5757",
          color: "#f4a95d"
        };
      } else {
        listOfMarkedDates[event.end_datetime.substring(0, 10)] = {
          // endingDay: true,
          color: "#f4a95d"
        };
      }
    });
    return listOfMarkedDates;
  };

  parseEventsNames = events => {
    const listOfNames = {};
    events.forEach(event => {
      if (!listOfNames[event.start_datetime.substring(0, 10)]) {
        listOfNames[event.start_datetime.substring(0, 10)] = [];
      }
      listOfNames[event.start_datetime.substring(0, 10)].push(event.name);
      if (
        !Object.keys(listOfNames).includes(event.end_datetime.substring(0, 10))
      ) {
        const daysSpan =
          event.end_datetime.substring(8, 10) -
          event.start_datetime.substring(8, 10);
        for (let i = 0; i < daysSpan - 1; i++) {
          let newDate =
            event.start_datetime.substring(0, 8) +
            (parseInt(event.start_datetime.substring(8, 10)) +
              i +
              1).toString();
          if (!listOfNames[newDate]) {
            listOfNames[newDate] = [];
          }
          listOfNames[newDate].push(event.name);
        }
        if (!listOfNames[event.end_datetime.substring(0, 10)]) {
          listOfNames[event.end_datetime.substring(0, 10)] = [];
        }
        listOfNames[event.end_datetime.substring(0, 10)].push(event.name);
      }
    });

    return listOfNames;
  };

  render() {
    this.fetchEventData();
    const { events } = this.state;
    if (events) {
      const listOfMarkedDates = this.parseEvents(events);
      const listOfNames = this.parseEventsNames(events);
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Calendar
            // Collection of dates that have to be marked. Default = {}
            markedDates={listOfMarkedDates}
            markingType={"period"}
            onDayPress={day => {
              if (Object.keys(listOfMarkedDates).includes(day.dateString)) {
                alert(
                  `There is ${listOfNames[day.dateString]} on ${day.dateString}`
                );
              }
              // 1. for each date in event_dates --> mark dates
              // 2. if pressed date is in list of event dates => alert
            }}
            style={{width: 350}}
          />
        </View>
      );
    }
  }
}

export default CalendarEvent;
