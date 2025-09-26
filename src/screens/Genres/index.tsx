import React, {useEffect, useMemo, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../redux/store/index';
// import { getGenreMovies } from '../../../src/hooks/useMoviesData';
import { useQuery } from "@tanstack/react-query";
import { getGenreMovies } from '@hooks/useMoviesData';
interface HomeProps {
  navigation: NativeStackNavigationProp<any, 'home'>;
}

export default function Genres({navigation}: HomeProps) {
    const dispatch = useDispatch();
    const {editProfile} = useSelector((state: RootState) => state.profile);

      const { data } = useQuery({
        queryKey: ["FetchAllGenreMovies"],
        queryFn: async () => getGenreMovies(),
        refetchOnWindowFocus: false,
    });

    console.log('data', data);

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Genre Screen {JSON.stringify(editProfile, null, 2)}</Text>
        </View>
      </SafeAreaView>
        
    )
}