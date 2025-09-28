import React, {useEffect, useMemo, useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../redux/store/index';
// import { getGenreMovies } from '../../../src/hooks/useMoviesData';
import { useQuery } from "@tanstack/react-query";
import { getGenreMovies } from '@hooks/useMoviesData';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundDefault, { BackgroundDefaultRef } from '@components/BackgroundDefault';

interface HomeProps {
  navigation: NativeStackNavigationProp<any, 'home'>;
}

export default function Genres({navigation}: HomeProps) {
    const dispatch = useDispatch();
    const {editProfile} = useSelector((state: RootState) => state.profile);

    //   const { data } = useQuery({
    //     queryKey: ["FetchAllGenreMovies"],
    //     queryFn: async () => getGenreMovies(),
    //     refetchOnWindowFocus: false,
    // });

    // console.log('data', data);
    const bgRef = useRef<BackgroundDefaultRef>(null);

    return (
      <BackgroundDefault ref={bgRef}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Genre Screen {JSON.stringify(editProfile, null, 2)}</Text>
            <TouchableOpacity
              style={{backgroundColor: 'purple', width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
              onPress={() => {
                bgRef.current?.moveCircle(0, 300, 0, 0, -70);
            }}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 500}}>
                  Mudar TOP
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'purple', width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
              onPress={() => {
                bgRef.current?.moveCircle(5, 800, 0, 0, -70);
            }}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 500}}>
                  Mudar BOTTOM
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'purple', width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
              onPress={() => {
                navigation.goBack();
            }}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 500}}>
                  Voltar
                </Text>
              </View>
            </TouchableOpacity>
        </View>
      </BackgroundDefault>
    )
}