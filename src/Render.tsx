import React, { useContext } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { AppContext } from './contexts/AppContext';

import { Menu } from './components/Menu/@index';
import { Profile } from './components/Profile/@index';

export function Render() {
  const { route } = useContext(AppContext);
  console.log(route);

  return (
    <>
      <StatusBar backgroundColor="#fff" />

      <SafeAreaView>
        {route === 'menu' && <Menu />}

        {route === 'profile' && <Profile />}
      </SafeAreaView>
    </>
  );
}
