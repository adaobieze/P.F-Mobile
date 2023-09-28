import React, {useState, useRef} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { PText } from '../components/PText';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';
import BackButton from '../components/BackButton';
import Input from '../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RadioButton from '../components/RadioButtons';
import RangePicker from '../components/RangeSlider';
import { Top1 } from '../components/Top';

const FilterScreen = ({navigation}) => {
   
  
  
    const onSubmit = async () => {
      try {
        // const response = await registerUser(formValues);
        // navigation.navigate('Waitlisted');
        navigation.navigate('Location');
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleInputChange = (name, text) => {
      setFormValues({
        ...formValues,
        [name]: text,
      });
    };
  
    const handleLayout = (key) => (event) => {
      const layout = event.nativeEvent.layout;
      setInputsPosition((prev) => ({
        ...prev,
        [key]: layout.y,
      }));
    };
  
    const handleFocus = (key) => () => {
      // scroll to the position of the input
      scrollRef.current.scrollToPosition(0, inputsPosition[key], true);
    };
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        birthday: "",
        levelOfEducation: "",
        institution: "",
        NIN: "",
        linkedIn: "",
        interaction: "",  
        goal: "",   
        agePreference: "",
        preferredCity: "",
        occupation: "",  
        company: "",
      });
    
      const [errorMessages, setErrorMessages] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        image: "",
        birthday: "",
        levelOfEducation: "",
        institution: "",
        NIN: "",
        linkedIn: "",
        interaction: "",  
        goal: "",  
        agePreference: "",
        preferredCity: "",
        occupation: "",  
        company: "",
      });
    
      const [load, setLoad] = useState(true)
    
      const scrollRef = useRef(null);
      const [inputsPosition, setInputsPosition] = useState({});
    
      const handleGenderChange = (selectedGender) => {
        setFormValues(prev => ({ ...prev, gender: selectedGender }));
      }
    
      const handleInteractionChange = (selectedInteraction) => {
        setFormValues(prev => ({ ...prev, interaction: selectedInteraction }));
      }
      
      const handleGoalChange = (selectedGoal) => {
        setFormValues(prev => ({ ...prev, goal: selectedGoal }));
      }
    return (
        <View className='w-full h-full flex-1'>
            <Top1 text = {"Filter"} navigation = {navigation} leftImage={require("../../assets/images-videos/on-boarding-photo-8.jpg")}/>
           <StripedBackgroundDecal image={require("../../assets/images-videos/leafBackground.png")}>
              <KeyboardAwareScrollView
                extraScrollHeight={10}
              >
                <RadioButton 
                  options={['Men', 'Women', 'Others']} 
                  value={formValues.interaction}
                  label={'Interaction'}
                  onChange={handleInteractionChange} 
                  error={errorMessages.interaction}
                />
                <RadioButton 
                  options={['Friendship', 'Relationship', 'Marriage']} 
                  value={formValues.goal}
                  label={'Goal'}
                  onChange={handleGoalChange} 
                  error={errorMessages.goal}
                />
                <RangePicker 
                  label={'Age'}
                  value={formValues.agePreference}
                  min={25} 
                  max={85} 
                  onValuesChange={(values) => {
                      setFormValues({
                          ...formValues,
                          agePreference: values
                      })
                  }}
                  error={errorMessages.agePreference}
                />
                <TouchableOpacity style={styles.dropDown} onPress={()=>navigation.navigate("EditInterests")}>
                    <PText style={{color:"#000", fontSize:16, fontWeight:"500"}}>Select Interests</PText>
                    <Image source={require("../../assets/images-videos/pointDown.png")} style={{width:10, height:5}}/>
                </TouchableOpacity>
                
                <Button
                  onPress={()=>navigation.navigate("Privacy")}
                  text={'Done'}
                  buttonStyle='bg-primary mt-8'
                  textStyle='font-semibold text-lg text-black'
                />
              </KeyboardAwareScrollView>
      </StripedBackgroundDecal>
        </View>
    );

}
const styles = StyleSheet.create({
    dropDown:{
        borderRadius: 5, 
        backgroundColor: "#D9D9D9", 
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-between", 
        padding:10
    }
});

export default FilterScreen;
