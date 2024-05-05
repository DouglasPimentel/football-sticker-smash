import { StyleSheet, Image } from 'react-native';

type ImageViewerProps = {
  seletedImage: string | null;
};

const ImageViewer = ({ seletedImage }: ImageViewerProps) => {
  return (
    <>
      {seletedImage ? (
        <Image source={{ uri:  seletedImage }} style={styles.image} />
      ) : (
        <Image style={styles.image} source={require('../../assets/images/image-get-started.jpg')} />
      )}
    </>
  );  
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
