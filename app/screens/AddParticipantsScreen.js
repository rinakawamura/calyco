import React, { Component } from "react";
import PropTypes from "prop-types";
import { Auth } from "aws-amplify";
import CreateEventComponent from "../components/CreateEvent";

// query imports
import { API, graphqlOperation } from "aws-amplify";
import { listUsersShortened } from "../../src/graphql/custom_queries";

import { Actions } from "react-native-router-flux";
import { userItemSeparator } from "../helpers";

import { getUser } from "../../src/graphql/queries";
import { Alert, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import TextButton from "../base_components/TextButton";
import Header from "../components/Header";
import ParticipantsListItem from "../components/ParticipantsListItem";
// import { TouchableOpacity } from "react-native-gesture-handler";

class AddParticipantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Should have access to logged in user => this.props.loggedInUser
      participants: [],
      search: "",
      filteredData: [],
      allData: []
    };
  }

  fetchRequestData = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUsersShortened))
      this.setState({allData: userData.data.listUsers.items, participants: this.props.participants})
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      "didFocus",
      () => {
        this.fetchRequestData();
      }
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  _filterSearch = text => {
    const { search, filteredData, allData } = this.state;
    if (text) {
      const newData = allData.filter(function(item) {
        const itemData = item.username
          ? item.username.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({ filteredData: newData });
    } else {
      this.setState({ filteredData: [] }); //No query
    }
    this.setState({ search: text });
  };

  renderUser(item) {
    <TextButton
      title={item.username}
      primary
      onPress={() => this.addParticipant(item)}
    />;
  }

  addParticipant(participant) {
    let participants = this.state.participants;
    let pids = participants.map(p => p.id);
    if (participant.id == this.props.loggedInUser.id) {
      Alert.alert("Cannot add yourself as a participant.");
    } else if (pids.includes(participant.id)) {
      Alert.alert("Participant already added.");
    } else {
      participants.push(participant);
      this.setState({ participants: participants });
    }
  }

  // TODO: Get participant_id from button? Add ID as attribute when displaying
  deleteParticipant(participant_id){
    let participants = this.state.participants
    let index = -1
    for (let i = 0; i < participants.length; i++){
      if (participants[i].id == participant_id){
        index = i;
        break;
      }
    };
    if (index > -1){
      participants.splice(index, 1);
    }
    this.setState({ participants: participants})
  }

  renderParticipantsListItem(item){
    return (
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          {item.username}
        </Text>
        <TouchableOpacity onPress={() => this.deleteParticipant(item.id)}>
          <Image
          style={styles.removeIcon}
          source={require("../../assets/remove_icon.png")}
          />
        </TouchableOpacity>
        
      </View>
    );
  };

  render() {
    const { participants, search, filteredData, allData } = this.state;
    if (participants && this.props.loggedInUser) {
      let displayParticipants = [];
      for (let i = 0; i < participants.length; i++) {
        displayParticipants.push(
          <Text key={participants[i].id}>
            {participants[i].username}
          </Text>
        );
      }
      // let displayParticipants = participants.map(p => {
      //   <Text>{p.username}</Text>
      //   // <TextButton title={p.username} primary onPress={() => Actions.userProfileScreen({ userId: p.id })}/>
      // });
      return (
        <View style={styles.container}>
          <Header title="Participants" />
          <FlatList
            style={styles.participantList}
            horizontal={true}
            data={participants}
            renderItem={({ item }) => this.renderParticipantsListItem(item)}
          />

          <SearchBar
            style={styles.bar}
            placeholder="Search..."
            onChangeText={text => this._filterSearch(text)}
            onClear={() => this._filterSearch("")}
            value={search}
          />

          <FlatList
            data={filteredData}
            // keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={userItemSeparator}
            renderItem={({ item }) =>
              <View style={styles.listItem}>
                <TextButton
                  style={styles.searchText}
                  title={item.username}
                  primary
                  onPress={() => this.addParticipant(item)}
                />
              </View>}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  participantList: {
    // marginBottom: 100
  },
  bar: {},
  container: {
    paddingTop: 60
  },
  loading: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  listItem: {
    width: "100%",
    padding: 15,
    // backgroundColor: "#f8f8f8",
    borderColor: "#c7c7c7",
    borderBottomWidth: 1
  },
  searchText: {
    fontSize: 20,
    padding: 15
  },
  listItemView: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItemText: {
    fontSize: 23,
    color: "black"
  },
  removeIcon: {
    marginLeft: 5,
    marginBottom: 5,
    width: 15,
    height: 15,
    tintColor: "firebrick"
  }
});


export default AddParticipantScreen;
