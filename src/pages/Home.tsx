import { IonButton, 
    IonContent, IonHeader, 
    IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [showToast,setShowToast] = useState(false)
  function clickHandle(){
    //alert('Button clicked!');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false)
    }, 2000);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>My First App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={clickHandle} expand="block"color="warning">Click me!</IonButton>
        <IonToast isOpen={showToast} 
              message="Luch time!!" position="middle"></IonToast>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
