importScripts('https://www.gstatic.com/firebasejs/9.9.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCnGpNZRZ17XViMTQ55tbz4TIdJUuosfso",
  authDomain: "supabase-test-bcb8d.firebaseapp.com",
  projectId: "supabase-test-bcb8d",
  storageBucket: "supabase-test-bcb8d.appspot.com",
  messagingSenderId: "770135014528",
  appId: "1:770135014528:web:1837092d9b636e23f3ba65",
  measurementId: "G-K5DPRBF4S1"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload =>{
    console.log('recibista un mensaje mientras estabas ausente');
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://pbs.twimg.com/profile_images/1397471927132844033/jN-wuufb_400x400.jpg'
    }

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    )
})

const bodyNotification = {
    'notification': {
        'title': 'Prueba ',
        'body': 'Body prueba'
    }, 
    'to':'d88bly11MIixzB9pwrDby8:APA91bFk3-JGf0P5zX-YRluYUe19DCh1mnmCzX8JGrHg6Ct09mWVN0PzBQCzu7anme1cWCl19kXu0v3iefEhFIkPXwuEFNX7Fv2xDxFqGpnzxikgz169eQ2PNCvlzIH4FC29eAC63wlG'
}
const sendNotification =()=>{
    fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization':'key=AAAAs0-fvIA:APA91bFdX1nRVO0cqUAh7s51c7JwBQd025CQ2TrfFTQlVnAf3wqxZPX94gb4Y57oQdHG5PqBAmtM3vx0zaM_S_58eUVvMWigVxTNS6Cr0hYXiLKzbSDHXhQ9X1qD-GEmnknR-AI9mIAM'},
        body: JSON.stringify(bodyNotification)
    }).then(res => console.log(res))
    .catch(error => console.error(error))
}


