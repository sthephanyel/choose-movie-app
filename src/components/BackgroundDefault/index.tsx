import React, {forwardRef, Fragment, ReactNode, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


export interface object_circuls_type {
    width: number;
    height: number;
    top: number;
    right: number;
    left: number;
    bottom: number;
    translateY: number;
    translateX: number;
}
const duration = 2000;
const DELAY = 500;
export interface BackgroundDefaultRef {
  moveCircle: (
    index: number, 
    newTop?: number, 
    newBottom?: number,
    translateY?: number,
    newTranslateX?: number
  ) => void;
}

const BackgroundDefault = forwardRef<BackgroundDefaultRef, { children?: React.ReactNode }>(
  ({ children }, ref) => {
  const insets = useSafeAreaInsets();
  const circuls_default = [
    { width: 200, height: 200, top: insets.top - 50, right: -100, left: 0, bottom: 0, translateY: 0, translateX: 0 },
    { width: 100, height: 100, top: 100, right: 50, left: 0, bottom: 0, translateY: 0, translateX: 0 },
    { width: 70, height: 70, top: 180, right: 200, left: 0, bottom: 0, translateY: 0, translateX: 0 },
    { width: 40, height: 40, top: 50, right: 0, left: 30, bottom: 0, translateY: 0, translateX: 0 },
    { width: 10, height: 10, top: 80, right: 0, left: 20, bottom: 0, translateY: 0, translateX: 0 },
    { width: 120, height: 120, top: 0, right: 100, left: 0, bottom: 300, translateY: 0, translateX: 0 },
    { width: 200, height: 200, top: 0, right: 0, left: -50, bottom: insets.bottom - 20, translateY: 0, translateX: 0 },
    { width: 50, height: 50, top: 0, right: 0, left: 40, bottom: 220, translateY: 0, translateX: 0 },
    { width: 20, height: 20, top: 0, right: 0, left: 80, bottom: 260, translateY: 0, translateX: 0 },
    { width: 140, height: 140, top: 0, right: -50, left: 0, bottom: 40, translateY: 0, translateX: 0 },
    { width: 50, height: 50, top: 0, right: 70, left: 0, bottom: 160, translateY: 0, translateX: 0 },
    { width: 10, height: 10, top: 0, right: 90, left: 0, bottom: 50, translateY: 0, translateX: 0 },
  ]

  const [circuls, setCirculs] = useState<object_circuls_type[]>(circuls_default)

  const { height, width } = Dimensions.get("window");

  function percentToPx(value: string | null, base: number, index: number) {
    if (!value) return 0;
    let response = null
    if (value.endsWith("%")) {
      response = (parseFloat(value) / 100) * base;
    }
    response = parseFloat(value);

    return response
  }

  const topShared = useRef(circuls.map(c => useSharedValue(c.top))).current;
  const bottomShared = useRef(circuls.map(c => useSharedValue(c.bottom))).current;
  const translateYShared = useRef(circuls.map(c => useSharedValue(c.translateY))).current;
  const translateXShared = useRef(circuls.map(c => useSharedValue(c.translateX))).current;

  useImperativeHandle(ref, () => ({
    moveCircle(index: number, newTop?: number, newBottom?: number, translateY?: number, newTranslateX?: number) {
      if (newTop !== undefined && newTop !== 0){
        topShared[index].value = withTiming(newTop, { duration: 500 }, () => {
          translateXShared[index].value = translateY !== undefined && translateY !== 0 ? withSpring(translateY): 0;
          translateXShared[index].value = newTranslateX !== undefined && newTranslateX !== 0 ? withSpring(newTranslateX): 0;
          topShared[index].value = withRepeat(
              withTiming(newTop + 10, { duration: 2000 }),
              -1,
              true
            );
          }
        );
      }

      if (newBottom !== undefined && newBottom !== 0){
        bottomShared[index].value = withTiming(newBottom, { duration: 500 }, () => {
          translateXShared[index].value = translateY !== undefined && translateY !== 0 ? withSpring(translateY): 0;
          translateXShared[index].value = newTranslateX !== undefined && newTranslateX !== 0 ? withSpring(newTranslateX): 0;
          bottomShared[index].value = withRepeat(
              withTiming(newBottom + 10, { duration: 2000 }),
              -1,
              true
            );
          }
        );
      }
    },
  }));

  function AnimatedBox(i:any ,index: number){
    // const top_shared = useSharedValue(i.top);
    // const bottom_shared = useSharedValue(i.bottom);

    const animatedStyleTop = useAnimatedStyle(() => ({
      top: topShared[index].value ?topShared[index].value : null
      , transform: [
        {
          translateY: translateYShared[index].value
        },
        {
          translateX: translateXShared[index].value
        },
      ]
    }));

    const animatedStyleBottom = useAnimatedStyle(() => ({
      bottom: bottomShared[index].value
      , transform: [
        {
          translateY: translateYShared[index].value
        },
        {
          translateX: translateXShared[index].value
        },
      ]
    }));

    useEffect(() => {
      topShared[index].value = withDelay(index * DELAY, withRepeat(withTiming(i.top + 10, { duration }), -1, true));
      bottomShared[index].value = withDelay(index * DELAY, withRepeat(withTiming(i.bottom + 10, { duration }), -1, true));
    }, []);

    return (<Fragment key={index}>
      { i.top != 0 ? 
          <Animated.View
            style={[
              {
                width: i.width, 
                height: i.height, 
                backgroundColor: 'blue', 
                borderRadius: 100,
                top: i.top == 0 ? null : percentToPx(`${i.top}`, height, index),
                right: i.right == 0 ? null : percentToPx(`${i.right}`, width, index),
                left: i.left == 0 ? null : percentToPx(`${i.left}`, width, index),
                bottom: i.bottom == 0 ? null : percentToPx(`${i.bottom}`, width, index),
                position: 'absolute'
              },
              animatedStyleTop
            ]}
          />
        :
          <Animated.View
            style={[
              {
                width: i.width, 
                height: i.height, 
                backgroundColor: 'blue', 
                borderRadius: 100,
                top: i.top == 0 ? null : percentToPx(`${i.top}`, height, index),
                right: i.right == 0 ? null : percentToPx(`${i.right}`, width, index),
                left: i.left == 0 ? null : percentToPx(`${i.left}`, width, index),
                bottom: i.bottom == 0 ? null : percentToPx(`${i.bottom}`, width, index),
                position: 'absolute'
              },
              animatedStyleBottom
            ]}
          />
      }
    </Fragment>);
  }

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.backgroundLayer}>
            <View style={{flex: 1, position:'relative', backgroundColor: 'red'}}>
              {circuls.map((i, index)=>{
                return AnimatedBox(i, index)
              })}
            </View>
          </View>
            {children}
        </View>
      </SafeAreaView>
        
    )
})
export default BackgroundDefault;

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