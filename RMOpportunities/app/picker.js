import ImagePicker from 'react-native-image-picker';

import Trad from './traduction';
var lang = 'en';

var options = {
  title: Trad[lang].choix_img,
  cancelButtonTitle: Trad[lang].annuler,
  takePhotoButtonTitle: Trad[lang].prendre_photo,
  chooseFromLibraryButtonTitle: Trad[lang].choix_gallerie,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

let pick = (cb) => {
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };
      cb(source, response.data);
    }
  });
}

module.exports = pick;
