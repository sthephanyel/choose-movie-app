import React, {useEffect, useMemo, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BackgroundDefault({ children }: any) {
  const insets = useSafeAreaInsets();
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.backgroundLayer}>
            <View style={{flex: 1, position:'relative', backgroundColor: 'red'}}>
              {/* CIMA */}
              <View 
                style={{
                  width: 200, 
                  height: 200, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  top: insets.top - 50,
                  right: -100,
                  position: 'absolute'
                }}
              />
              <View 
                style={{
                  width: 100, 
                  height: 100, 
                  backgroundColor: 'purple', 
                  borderRadius: '100%',
                  position: 'absolute',
                  right: '10%',
                  top: '10%'
                }}
              />
              <View 
                style={{
                  width: 70, 
                  height: 70, 
                  backgroundColor: 'purple', 
                  borderRadius: '100%',
                  position: 'absolute',
                  right: '70%',
                  top: '25%'
                }}
              />
              <View 
                style={{
                  width: 40, 
                  height: 40, 
                  backgroundColor: 'purple', 
                  borderRadius: '100%',
                  position: 'absolute',
                  top: '5%',
                  left: '10%'
                }}
              />
              <View 
                style={{
                  width: 10, 
                  height: 10, 
                  backgroundColor: 'purple', 
                  borderRadius: '100%',
                  position: 'absolute',
                  top: '10%',
                  left: '6%'
                }}
              />
              {/* BAIXO */}
              <View 
                style={{
                  width: 120, 
                  height: 120, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  bottom: '40%',
                  right: '10%',
                  position: 'absolute'
                }}
              />
              <View 
                style={{
                  width: 200, 
                  height: 200, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  bottom: insets.bottom - 20,
                  left: -50,
                  position: 'absolute'
                }}
              />
              <View 
                style={{
                  width: 50, 
                  height: 50, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  bottom: '24%',
                  left: '10%',
                  position: 'absolute'
                }}
              />
              <View 
                style={{
                  width: 20, 
                  height: 20, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  bottom: '30%',
                  left: '19%',
                  position: 'absolute'
                }}
              />
              <View 
                style={{
                  width: 140, 
                  height: 140, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  bottom: '5%',
                  right: -50,
                  position: 'absolute'
                }}
              />
              <View 
                style={{
                  width: 50, 
                  height: 50, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  bottom: '18%',
                  right: '19%',
                  position: 'absolute'
                }}
              />
              <View 
                style={{
                  width: 10, 
                  height: 10, 
                  backgroundColor: 'purple', 
                  borderRadius: 100,
                  bottom: '5%',
                  right: '19%',
                  position: 'absolute'
                }}
              />
            </View>
          </View>
            {children}
        </View>
      </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1C0F13",
    // opacity: 0.9,
    // padding: 10
  },
  content: {
    flex: 1,
    padding: 16,
  },
});