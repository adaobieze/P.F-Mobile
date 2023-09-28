// SignUpScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback, ScrollView, Pressable, StyleSheet } from 'react-native';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';
import ProgressBar from '../components/ProgressBar';
import { registerUser } from '../api';
import PhotoUpload from '../components/PhotoUpload';
import Input from '../components/Input';
import RadioButton from '../components/RadioButtons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from '../components/DatePicker';
import RangePicker from '../components/RangeSlider';
import Cell from '../components/cell';
import { TextInput1 } from './TextInput';

const SignUpScreen = ({ navigation, route }) => {
  const [imageUri, setImageUri] = useState(null);
  const [step, setStep] = useState(1);
  const phoneNumber = route.params.phoneNumber;
  // console.log('Phone number: ', phoneNumber);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: phoneNumber || "",
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

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const scrollRef = useRef(null);
  const birthdayRef = useRef(null);
  const levelOfEducationRef = useRef(null);
  const institutionRef = useRef(null);
  const NINRef = useRef(null);
  const linkedInRef = useRef(null);
  const interactionRef = useRef(null);
  const goalRef = useRef(null);
  const agePreferenceRef = useRef(null);
  const preferredCityRef = useRef(null);
  const occupationRef = useRef(null);
  const companyRef = useRef(null);
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

  const [interestData, setInterestData]=useState([
    {intrest:"Sports", clicked:false},
    {intrest:"Music", clicked:false},
    {intrest:"News", clicked:false},
    {intrest:"Arts", clicked:false},
    {intrest:"Movies", clicked:false},
    {intrest:"Travelling", clicked:false},
    {intrest:"Comedy", clicked:false},
    {intrest:"Games", clicked:false},
    {intrest:"Events", clicked:false},
    {intrest:"Sports", clicked:false},
    {intrest:"Music", clicked:false},
    {intrest:"News", clicked:false},
    {intrest:"Arts", clicked:false},
    {intrest:"Movies", clicked:false},
    {intrest:"Travelling", clicked:false},
    {intrest:"Comedy", clicked:false},
    {intrest:"Games", clicked:false},
    {intrest:"Events", clicked:false},
    {intrest:"Sports", clicked:false},
    {intrest:"Music", clicked:false},
    {intrest:"News", clicked:false},
    {intrest:"Arts", clicked:false},
    {intrest:"Movies", clicked:false},
    {intrest:"Travelling", clicked:false},
    {intrest:"Comedy", clicked:false},
    {intrest:"Games", clicked:false},
    {intrest:"Events", clicked:false},
    {intrest:"Sports", clicked:false},
    {intrest:"Music", clicked:false},
    {intrest:"News", clicked:false},
    {intrest:"Arts", clicked:false},
    {intrest:"Movies", clicked:false},
    {intrest:"Travelling", clicked:false},
    {intrest:"Comedy", clicked:false},
    {intrest:"Games", clicked:false},
    {intrest:"Events", clicked:false}
  ])

  const onNext = () => {
    // if (step === 1 && !validateStep1()) {
    //   return;
    // }

    // if (step === 2 && !validateStep2()) {
    //   return;
    // }

    // if (step === 3 && !validateStep3()) {
    //   return;
    // }
  
    if (step < 4) {
      setStep(step + 1);
      console.log("Current step: ", step);
    } else {
      onSubmit();
    }
  };
  
  const validateStep1 = () => {
    const { firstName, lastName, email, gender, phoneNumber } = formValues;
    
    // Email regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
    const errors = {
      firstName: firstName ? "" : "First name is required.",
      lastName: lastName ? "" : "Last name is required.",
      email: emailRegex.test(email) ? "" : "Email is not valid.",
      gender: gender ? "" : "Gender is required.",
      phoneNumber: phoneNumber ? "" : "Phone number is required.",
      image: imageUri ? "" : "Image is required.",  // new image validation
    };
      
    setErrorMessages(errors);
    
    return !Object.values(errors).some(error => error !== "");
  };

  const validateStep2 = () => {
    const { birthday, levelOfEducation, institution, NIN, linkedIn } = formValues;

    // NIN Regex
    const ninRegex = /^[0-9]{11}$/;
  
    const errors = {
      birthday: birthday ? "" : "Birthday is required.",
      levelOfEducation: levelOfEducation ? "" : "Level of Education is required.",
      institution: institution ? "" : "Institution is required.",
      // NIN: NIN ? "" : "NIN is required.",
      NIN: ninRegex.test(NIN) ? "" : "NIN is not valid. It should be 11 digits.",
      linkedIn: linkedIn ? "" : "LinkedIn is required.",
    };
      
    setErrorMessages(errors);
    
    return !Object.values(errors).some(error => error !== "");
  };

  const validateStep3 = () => {
    const { interaction, goal, agePreference, preferredCity, occupation } = formValues;
  
    const errors = {
      interaction: interaction ? "" : "This field is required",
      goal: goal ? "" : "This field is required.",
      agePreference: agePreference ? "" : "This field is required.",
      preferredCity: preferredCity ? "" : "This field is required.",
      occupation: occupation ? "" : "Occupation is required.",
      // company: company ? "" : "Company is required.",
    };
      
    setErrorMessages(errors);
    
    return !Object.values(errors).some(error => error !== "");
  };

  const onBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

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


  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: 'black' }}>
      
            {step === 1 && (
              <StripedBackgroundDecal>
              <View style={{flex:1}}>
                <View style ={{marginVertical:20}}>
                  <ProgressBar step={step} />
                </View>
                <KeyboardAwareScrollView
                  extraScrollHeight={10}
                >
                   <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 16 }}>
                    Person Information
                  </Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 32 }}>
                    Enter your personal information to help us create a profile for you.
                  </Text>
                <PhotoUpload setImageUri={setImageUri} imageUri={imageUri} className='w-20' />
                <Input 
                  onLayout={handleLayout('firstName')}
                  onFocus={handleFocus('firstName')}
                  ref={firstNameRef}
                  label="First Name"
                  value={formValues.firstName}
                  onChangeText={(text) => handleInputChange('firstName', text)}
                  // placeholder="First Name"
                  autoCompleteType="name"
                  returnKeyType='next'
                  onSubmitEditing={() => lastNameRef.current.focus()}
                  error={errorMessages.firstName}
                />
                <Input 
                  onLayout={handleLayout('lastName')}
                  onFocus={handleFocus('lastName')}
                  ref={lastNameRef}
                  label="Last Name"
                  value={formValues.lastName}
                  onChangeText={(text) => handleInputChange('lastName', text)}
                  // placeholder="Last Name"
                  autoCompleteType="name"
                  returnKeyType='next'
                  onSubmitEditing={() => emailRef.current.focus()}
                  error={errorMessages.lastName}
                />
                <Input 
                  onLayout={handleLayout('email')}
                  onFocus={handleFocus('email')}
                  ref={emailRef}
                  label="Email"
                  value={formValues.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                  // placeholder="Email"
                  keyboardType="email-address"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  returnKeyType='done'
                  onSubmitEditing={() => Keyboard.dismiss()}
                  error={errorMessages.email}
                />
                <Input 
                  label="Phone Number"
                  value={phoneNumber}
                  readOnly={true}
                  keyboardType="phone-pad"
                  error={errorMessages.phoneNumber}
                />
                <RadioButton 
                  label={'Gender'}
                  options={['Male', 'Female', 'Others']} 
                  onChange={handleGenderChange} 
                  error={errorMessages.gender}
                />
                <Button
                  onPress={onNext}
                  text={'Next'}
                  buttonStyle='bg-primary mt-8'
                  textStyle='font-semibold text-lg text-black'
                />
              </KeyboardAwareScrollView>
        </View>
      </StripedBackgroundDecal>
            )}

            {step === 2 && (
              <StripedBackgroundDecal>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:20}}>
                  <BackButton onPress={onBack} style={{}} />
                  <ProgressBar step={step} />
                  <View/>
                </View>
      
              <View style={{flex:1}}>
                
                <KeyboardAwareScrollView
                  contentContainerStyle={{ paddingBottom: 500 }}
                >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 16 }}>
                Person Information
                </Text>
                <DatePicker 
                  ref={birthdayRef}
                  label="Date of Birth"
                  className='mb-4 w-full'
                  onDateChange={(date) => handleInputChange('birthday', date)} 
                  error={errorMessages.birthday}
                  value={formValues.birthday}
                />
                <View className='mb-4 w-full'>
                  <Text className={`mb-2 text-lg font-medium text-white`}>Education</Text>
                  <RNPickerSelect
                    ref={levelOfEducationRef}
                    onValueChange={(value) => setFormValues(prev => ({ ...prev, levelOfEducation: value }))}
                    items={[
                      { label: 'High School', value: 'highschool' },
                      { label: "Bachelor's Degree", value: 'bachelor' },
                      { label: "Master's Degree", value: 'master' },
                      { label: "PhD", value: 'phd' },
                      { label: "Other", value: 'other' },
                    ]}
                    placeholder={{label: "Please, select your level of education", value: null}}
                    value={formValues.levelOfEducation}
                    style={{
                      inputIOS: {
                        fontSize: 20,
                        paddingVertical: 12,
                        paddingHorizontal: 10,
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 4,
                        color: 'black',
                        paddingRight: 30, // to ensure the text is never behind the icon
                        backgroundColor:'white',
                        marginBottom: 4,
                        height: 50,
                      },
                      inputAndroid: {
                        fontSize: 16,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        borderWidth: 0.5,
                        borderColor: 'purple',
                        borderRadius: 8,
                        color: 'black',
                        paddingRight: 30, // to ensure the text is never behind the icon
                        backgroundColor:'white',
                        marginBottom: 4,
                        height: 50,
                      },
                    }}
                  />
                  {errorMessages.levelOfEducation && <Text style={{ color: 'red' }}>{errorMessages.levelOfEducation}</Text>}
                </View>
                <Input 
                  ref={institutionRef}
                  label="Institution"
                  value={formValues.institution}
                  onChangeText={(text) => handleInputChange('institution', text)}
                  // placeholder="Institution"
                  returnKeyType='next'
                  onSubmitEditing={() => NINRef.current.focus()}
                  error={errorMessages.institution}
                />
                <Input 
                  ref={NINRef}
                  label="NIN"
                  value={formValues.NIN}
                  onChangeText={(text) => handleInputChange('NIN', text)}
                  // placeholder="NIN"
                  returnKeyType='next'
                  onSubmitEditing={() => linkedInRef.current.focus()}
                  autoCompleteType="off"
                  error={errorMessages.NIN}
                />
                <Input 
                  ref={linkedInRef}
                  label="LinkedIn"
                  value={formValues.linkedIn}
                  onChangeText={(text) => handleInputChange('linkedIn', text)}
                  // placeholder="LinkedIn"
                  returnKeyType='done'
                  onSubmitEditing={() => Keyboard.dismiss()}
                  error={errorMessages.linkedIn}
                />
                <Button
                  onPress={onNext}
                  text={'Next'}
                  buttonStyle='bg-primary mt-8'
                  textStyle='font-semibold text-lg text-black'
                />
                </KeyboardAwareScrollView>
              </View>
      </StripedBackgroundDecal>
            )}

          {step === 3 && (
              <StripedBackgroundDecal>
                <BackButton onPress={onBack} style={{marginVertical:20}} />
                 <ScrollView style = {{flexGrow:1}}>
                        <Text style = {styles.text1}>
                            Bio
                        </Text>
                    
                        <View style={{marginVertical:20}}>
                            <Text style = {styles.text2}>
                                Give a brief introduction about yourself.
                            </Text>
                            <TextInput1
                            type ={"large"}/>
                        </View>
                            <Text style={{ color: 'white', fontWeight: '500', fontSize: 24, marginBottom: 5, marginTop:10 }}>
                              Select Interests
                            </Text>
                            <Text style = {styles.text2}>
                                Select only six intreast 
                            </Text>
                <View style = {{flexDirection:"row", flexWrap:"wrap"}}>
                {
                  interestData.map((item, index)=>{
                    return(
                      <Pressable  key ={index} style ={{marginRight:15, marginBottom:15}} onPress={()=>{
                        item.clicked = !item.clicked;
                        setInterestData([...interestData])
                        }}>
                        <Cell interest = {item.intrest} clicked ={item.clicked}/>
                      </Pressable>
                    )
                  })
                }

                      
                        
                  
                  
                </View>
                <Button
                  onPress={onNext}
                  text={'Next'}
                  buttonStyle='bg-primary mt-8'
                  textStyle='font-semibold text-lg text-black'
                />
                </ScrollView>
             </StripedBackgroundDecal>
            )}

            {step === 4 && (
              <StripedBackgroundDecal>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:20}}>
                  <BackButton onPress={onBack} style={{}} />
                  <ProgressBar step={step} />
                  <View/>
                </View>
              <KeyboardAwareScrollView
                contentContainerStyle={{ paddingBottom: 500 }}
                extraScrollHeight={10}
              >
                <RadioButton 
                  options={['Men', 'Women', 'Others']} 
                  value={formValues.interaction}
                  label={'Who would you like to interact with?'}
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
                <Input 
                  ref={preferredCityRef}
                  label="Enter your preferred city"
                  value={formValues.preferredCity}
                  onChangeText={(text) => handleInputChange('preferredCity', text)}
                  returnKeyType='next'
                  onSubmitEditing={() => occupationRef.current.focus()}
                  error={errorMessages.preferredCity}
                />
                <Input 
                  ref={occupationRef}
                  label="Occupation"
                  value={formValues.occupation}
                  onChangeText={(text) => handleInputChange('occupation', text)}
                  // placeholder="Occupation"
                  returnKeyType='next'
                  onSubmitEditing={() => companyRef.current.focus()}
                  error={errorMessages.occupation}
                />
                <Input 
                  ref={companyRef}
                  label="Company"
                  value={formValues.company}
                  onChangeText={(text) => handleInputChange('company', text)}
                  // placeholder="Company"
                  returnKeyType='done'
                  onSubmitEditing={() => Keyboard.dismiss()}
                  error={errorMessages.linkedIn}
                />
                <Button
                  onPress={onNext}
                  text={'Finish'}
                  buttonStyle='bg-primary mt-8'
                  textStyle='font-semibold text-lg text-black'
                />
              </KeyboardAwareScrollView>
      </StripedBackgroundDecal>
            )}
          
    </View>
  );
};
const styles = StyleSheet.create({
  text1:{
    color: "#FFF",
    // fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "500",
    marginTop:10
},
text2:{
    color: "#FFF",
    // fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
    marginBottom:8
},
});

export default SignUpScreen;