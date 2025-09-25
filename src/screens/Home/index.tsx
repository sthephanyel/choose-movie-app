import React, {useEffect, useMemo, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../redux/store/index';
// import { getGenreMovies } from '../../../src/hooks/useMoviesData';
import { useQuery } from "@tanstack/react-query";
import { getGenreMovies } from '@hooks/useMoviesData';
interface HomeProps {
  navigation: NativeStackNavigationProp<any, 'home'>;
}

export default function Home({navigation}: HomeProps) {
    const dispatch = useDispatch();
    const {editProfile} = useSelector((state: RootState) => state.profile);

      const { data } = useQuery({
        queryKey: ["FetchAllGenreMovies"],
        queryFn: async () => getGenreMovies(),
        refetchOnWindowFocus: false,
    });

    console.log('data', data);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen {JSON.stringify(editProfile, null, 2)}</Text>
        </View>
    )
}