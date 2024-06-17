const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Ruta al archivo serviceAccountKey.json

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'swgrem-ad366.appspot.com' // Reemplaza con el ID de tu proyecto Firebase
});

const bucket = admin.storage().bucket();
module.exports = bucket;
