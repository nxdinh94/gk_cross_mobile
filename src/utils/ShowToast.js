import { Toast } from '@capacitor/toast';


const showHelloToast = async (text) => {
    await Toast.show({
      text: text,
      position: 'bottom'
    });
};

export default showHelloToast;