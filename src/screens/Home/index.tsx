import React, {useEffect, useMemo, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../redux/store/index';
// import { getGenreMovies } from '../../../src/hooks/useMoviesData';
import { useQuery } from "@tanstack/react-query";
import { getGenreMovies } from '@hooks/useMoviesData';
import { homeObj } from 'src/utils/text_pages';
import BackgroundDefault from '@components/BackgroundDefault';
interface HomeProps {
  navigation: NativeStackNavigationProp<any, 'home'>;
}

export default function Home({navigation}: HomeProps) {
    const dispatch = useDispatch();
    const {editProfile} = useSelector((state: RootState) => state.profile);

    return (
      <BackgroundDefault>
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{backgroundColor: 'red', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              {homeObj.title_home}
            </Text>
          </View>
          <View style={{backgroundColor: 'yellow', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 15}}>
              {homeObj.description_home}
            </Text>
          </View>
        
          <TouchableOpacity
            style={{backgroundColor: 'blue', width: 274, height: 68, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
            onPress={() => {
              navigation.navigate('genres');
          }}>
            <View style={[styles.container, {}]}>
              <Text style={{fontSize: 24, fontWeight: 500}}>
                {homeObj.button_text}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor: 'gray', width: '100%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {}}>
            <View style={[styles.container, {}]}>
              <Text>
                {homeObj.link_text}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </BackgroundDefault>
    )
}

const styles = StyleSheet.create({
  container: {
  }
});