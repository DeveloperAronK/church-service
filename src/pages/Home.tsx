import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ServiceList from '../components/ServiceList';
import './Home.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>தூய யோவான் ஆலயம் - ஆலடிவிளை.</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                &nbsp;
                <IonTitle size="large" >ஆராதனை முறை</IonTitle>
                &nbsp;
                <ServiceList/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
