spinValue = new Animated.Value(0);

// First set up animation 
Animated.loop(
    Animated.timing(
      this.spinValue,
      {
       toValue: 1,
       duration: 3000,
       easing: Easing.linear,
       useNativeDriver: true
      }
    )
   ).start();

// Next, interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})