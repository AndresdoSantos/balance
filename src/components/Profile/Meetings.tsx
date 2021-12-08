import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Meetings() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.phoneButton}>
        <MaterialIcons name="phone-in-talk" size={20} color="#fff" />
        <Text style={styles.phoneText}>Call</Text>
      </TouchableOpacity>

      <View style={styles.meetingAndCalendarWrapper}>
        <TouchableOpacity style={styles.meetingButton}>
          <FontAwesome name="video-camera" size={20} color="#FE9738" />
          <Text style={styles.meetingText}>Meet</Text>
        </TouchableOpacity>
        <View style={{ width: 10 }} />
        <TouchableOpacity style={styles.calendarButton}>
          <Ionicons name="calendar" size={20} color="#FE9738" />
          <Text style={styles.calendarText}>Calendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  phoneButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#FE9738',
  },
  phoneText: {
    fontFamily: 'inter-600',
    color: '#fff',
    marginLeft: 10,
  },
  meetingAndCalendarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  meetingButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 60,
    borderRadius: 15,
    backgroundColor: '#F9F0EA',
    flex: 1,
  },
  meetingText: {
    fontFamily: 'inter-600',
    color: '#FE9738',
    marginLeft: 10,
  },
  calendarButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 60,
    borderRadius: 15,
    backgroundColor: '#F9F0EA',
    flex: 1,
  },
  calendarText: {
    fontFamily: 'inter-600',
    color: '#FE9738',
    marginLeft: 10,
  },
});
