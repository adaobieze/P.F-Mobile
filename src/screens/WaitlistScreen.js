import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';
import ModalComponent from '../components/Modal';
import ModalComponent2 from '../components/Modal2';

const WaitlistScreen = ({navigation}) => {
  const [modal1Visible, setModal1Visible] = React.useState(false);
  const [modal1Content, setModal1Content] = React.useState("");
  const [modal1Image, setModal1Image] = React.useState("");

  const [modal2Visible, setModal2Visible] = React.useState(false);

  const handleButton1Press = (content, image) => {
    setModal1Content(content);
    setModal1Image(image);
    setModal1Visible(true);
  }
  const handleButton2Press = () => {
    setModal2Visible(true);
  }
  const handleAllow = () => {
    setModal2Visible(false);
    navigation.navigate("Approved")
  }

  return (
    <View className='w-full h-full flex-1'>
      <StripedBackgroundDecal bgStyle='justify-center space-y-4'>
        <Text className='text-white font-bold uppercase text-2xl pb-8'>YOU ARE NOW ON THE WAITLIST</Text>
        <Text className='text-white text-lg text-center leading-none'>Hey {'User-name'}. In order to maintain a balanced yet exclusive community, we veto each applicant before giving access.</Text>
        <Text className='text-white text-lg text-center leading-none'>Your information is being reviewed at the moment. When the verification process is complete, we’ll send you an email or text notification to let you know your status.</Text>
        <Text className='text-white text-lg text-center leading-none pt-8'>Please, select how you'd like to be notified.</Text>

        <View className='space-y-4 pt-10'>
          <Button
            onPress={() => handleButton1Press("We’ll send a notification to your email ({'user's_e-mail'}) when your account has been processed.", require('../../assets/images-videos/envelope-icon.png'))}
            text={'Send notifiction via email'}
            buttonStyle='bg-primary'
            textStyle='text-black font-semibold text-lg'
          />

          <View className='flex-row items-center justify-center my-4'>
            <View className='flex-grow border-t border-white'></View>
            <Text className='text-white text-center text-xl font-semibold mx-2'>or</Text>
            <View className='flex-grow border-t border-white'></View>
          </View>

          <Button
            onPress={() => handleButton2Press()}
            text={'Send notifiction via text'}
            buttonStyle='border border-white'
            textStyle='text-white font-semibold text-lg'
          />
        </View>

        <ModalComponent 
          visible={modal1Visible} 
          onDismiss={() => setModal1Visible(false)} 
          content={modal1Content}
          dismissText={'OK'}
          image={modal1Image}
          imgStyle={'bg-primary'}
        />
        <ModalComponent2 
          visible={modal2Visible} 
          navigation={navigation}
          handleAllow={handleAllow}
          onDismiss={() => setModal2Visible(false)}
        />
      </StripedBackgroundDecal>
    </View>
  );
}

export default WaitlistScreen;