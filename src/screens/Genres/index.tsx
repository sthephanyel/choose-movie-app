import React, {useEffect, useMemo, useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../redux/store/index';
// import { getGenreMovies } from '../../../src/hooks/useMoviesData';
import { useQuery } from "@tanstack/react-query";
import { getGenreMovies } from '@hooks/useMoviesData';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundDefault, { BackgroundDefaultRef } from '@components/BackgroundDefault';
import { editgenresUp } from '@redux/reducers/Genres';

interface HomeProps {
  navigation: NativeStackNavigationProp<any, 'home'>;
}

export interface list_genres_type {
    id: number;
    name: string;
    selected: boolean;
}

export default function Genres({navigation}: HomeProps) {
    const dispatch = useDispatch();
    const {editProfile} = useSelector((state: RootState) => state.profile);

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [useGenresSelected, setUseGenresSelected] = useState([])

    const { data: genres } = useQuery({
      queryKey: ["FetchAllGenreMovies"],
      queryFn: async () => {
        let response = await getGenreMovies()
        await selectGenres(response)
        return response;
      },
      refetchOnWindowFocus: false,
    });
    // const { genres } = useSelector((state: RootState) => state.genres);

    // const [selectGenres, setSelectGenres] = useState([]);

    // console.log('data', genres);
    // console.log('useGenresSelected', useGenresSelected);
    // console.log('genres', genres);
    async function selectGenres (list_genres: []){
      if (list_genres !== undefined && list_genres.length > 0){
        list_genres?.forEach(function(item: list_genres_type) {
          item.selected = false;
        });
        setUseGenresSelected(list_genres)
        // await dispatch(editgenresUp(list_genres));
      }
    }
    
    const bgRef = useRef<BackgroundDefaultRef>(null);

    const Item = ({item, index}:{item: list_genres_type, index: number}) => (
      <View style={{width: '33%', margin: 1, backgroundColor: 'purple', padding: 10}}>
        <TouchableOpacity style={{backgroundColor: 'yellow', position: 'relative', height: 49, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} 
          onPress={()=>{
            const updated:any = [...useGenresSelected];
            updated[index] = { ...updated[index], selected: !updated[index].selected };
            setUseGenresSelected(updated);
          }}>
          <Text style={{fontSize: 15, fontWeight: 600}}>{item.name}</Text>
          <View style={{
            width: 10, 
            height: 10,
            borderRadius: 100,
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: item.selected ? 'green' : 'transparent',
          }} />
        </TouchableOpacity>
      </View>
    );

    return (
      <BackgroundDefault ref={bgRef}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 0.1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderEndEndRadius: 20, borderStartEndRadius: 20}}>
            <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
              <View style={{flex: 0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                }}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: 500, color: 'white'}}>
                      Voltar
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 1}}>
                <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Escolhe os tipos de filme que mais lhe agradam!</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={useGenresSelected}
              renderItem={({item, index}) => <Item item={item} index={index} />}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
            />
          </View>
          <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                }} style={{width: 274, height: 68, backgroundColor: 'purple', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: 500, color: 'white'}}>
                      Salvar
                    </Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
            {/* <Text>Genre Screen {JSON.stringify(editProfile, null, 2)}</Text>
            <TouchableOpacity
              style={{backgroundColor: 'purple', width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
              onPress={() => {
                bgRef.current?.moveCircle(5, 0, 1, 0, -12);
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
                bgRef.current?.moveCircle(5, 0, 500, 0, -70);
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
            </TouchableOpacity> */}
        </View>
      </BackgroundDefault>
    )
}