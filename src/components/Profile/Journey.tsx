import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import peopleImage from '../../../assets/images/people.jpeg';

export function Journey() {
  return (
    <View style={styles.container}>
      <View style={styles.journeyCard}>
        <View style={styles.journeyCardLogo}>
          <MaterialCommunityIcons
            name="file-document-edit"
            size={20}
            color="#fff"
          />
        </View>
        <View style={styles.titleAndDescriptionWrapper}>
          <Text style={styles.title}>User journey discussion</Text>
          <Text style={styles.description}>
            Get into information architeture
          </Text>
        </View>
      </View>

      <View style={styles.informationWrapper}>
        <View>
          <Text style={styles.informationTitleText}>Date</Text>
          <Text style={styles.informationDataText}>Nov 12</Text>
        </View>

        <View style={styles.separator} />

        <View>
          <Text style={styles.informationTitleText}>Time</Text>
          <Text style={styles.informationDataText}>11:30 - 12:30 pm</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.peopleWrapper}>
          <Image source={peopleImage} style={styles.peopleImage} />
          <View>
            <Text style={styles.informationTitleText}>From</Text>
            <Text style={styles.informationDataText}>John May</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addingButton}>
        <Ionicons name="add" size={20} color="#FE9738" />
        <Text style={styles.addingText}>Add</Text>
      </TouchableOpacity>

      <View style={styles.footerInformationsContainer}>
        <View style={styles.footerInline}>
          <View style={styles.footerInfo}>
            <Text style={styles.informationTitleText}>ID</Text>
            <Text style={styles.informationDataText}>9634</Text>
          </View>
          <View style={styles.footerInfo}>
            <Text style={styles.informationTitleText}>Mobile</Text>
            <Text style={styles.informationDataText}>24 9 9999 9999</Text>
          </View>
        </View>

        <View style={styles.footerInline}>
          <View style={styles.footerInfo}>
            <Text style={styles.informationTitleText}>Title</Text>
            <Text style={styles.informationDataText}>Programmer</Text>
          </View>
          <View style={styles.footerInfo}>
            <Text style={styles.informationTitleText}>Mail ID</Text>
            <Text style={styles.informationDataText}>johndoe@example.com</Text>
          </View>
        </View>

        <View style={styles.footerInline}>
          <View style={styles.footerInfo}>
            <Text style={styles.informationTitleText}>Reporting Managaer</Text>
            <Text style={styles.informationDataText}>Ada Lovelace</Text>
          </View>
          <View style={styles.footerInfo}>
            <Text style={styles.informationTitleText}>Experience</Text>
            <Text style={styles.informationDataText}>Tech</Text>
          </View>
        </View>

        <View style={styles.footerInline}>
          <View style={styles.footerInfo}>
            <Text style={styles.informationTitleText}>Projects</Text>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Allure Visual Design</Text>
              <Text style={styles.projectSubtitle}>UX Designer</Text>

              <Text style={styles.projectDescription}>Main</Text>
            </View>
          </View>

          <View style={styles.footerInfo}>
            <View style={styles.moreProjectsCard}>
              <Text style={styles.moreProjectsCardText}>+2</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  journeyCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    padding: 10,
    borderRadius: 15,
  },
  journeyCardLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#77B585',
  },
  titleAndDescriptionWrapper: {
    marginLeft: 20,
  },
  title: {
    fontFamily: 'inter-700',
  },
  description: {
    fontFamily: 'inter-400',
    fontSize: 12.5,
    color: '#374151',
  },
  informationWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  informationTitleText: {
    fontFamily: 'inter-400',
    fontSize: 12.5,
    color: '#9CA3AF',
  },
  informationDataText: {
    fontFamily: 'inter-700',
    fontSize: 12.5,
  },
  separator: {
    height: 20,
    width: 1,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 20,
  },
  peopleWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  peopleImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 15,
  },
  addingButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 60,
    borderRadius: 15,
    backgroundColor: '#F9F0EA',
    marginTop: 20,
  },
  addingText: {
    fontFamily: 'inter-600',
    color: '#FE9738',
    marginLeft: 10,
  },
  footerInformationsContainer: {
    marginTop: 30,
    marginLeft: 10,
  },
  footerInline: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  footerInfo: {
    marginRight: 20,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  projectCard: {
    height: 100,
    width: 200,
    backgroundColor: '#77B585',
    marginTop: 10,
    borderRadius: 20,
    padding: 20,
  },
  projectTitle: {
    fontFamily: 'inter-700',
    color: '#fff',
  },
  projectSubtitle: {
    fontFamily: 'inter-400',
    color: '#F3F4F6',
    fontSize: 11.5,
  },
  projectDescription: {
    fontFamily: 'inter-600',
    color: '#fff',
    marginTop: 10,
    fontSize: 13,
  },
  moreProjectsCard: {
    marginTop: 25,
    height: 100,
    width: 100,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    backgroundColor: '#F9FAFB',
  },
  moreProjectsCardText: {
    fontFamily: 'inter-800',
    fontSize: 25,
    color: '#9CA3AF',
  },
});
