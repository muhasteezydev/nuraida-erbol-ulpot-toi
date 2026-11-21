import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import { getAnalytics, isSupported as isAnalyticsSupported } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js';

const INVITATION_ID = 'erbol-nuraida-2026';

const firebaseConfig = {
  apiKey: 'AIzaSyAlo-c14FaSoJ3xohtK-5sTEAMTzXD_7Ac',
  authDomain: 'ayturgan-invitation.firebaseapp.com',
  projectId: 'ayturgan-invitation',
  storageBucket: 'ayturgan-invitation.firebasestorage.app',
  messagingSenderId: '578950730123',
  appId: '1:578950730123:web:38914405cb6c3c8b27df8e',
  measurementId: 'G-BMPF2B08MC',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

isAnalyticsSupported()
  .then((supported) => {
    if (supported) getAnalytics(app);
  })
  .catch(() => {});

async function saveRsvp({ docId, name, attendance, lang }) {
  const cleanId = String(docId || '').trim();
  const cleanName = String(name || '').trim().slice(0, 120);
  const cleanAttendance = attendance === 'no' ? 'no' : 'yes';
  const cleanLang = lang === 'ru' ? 'ru' : 'kg';

  if (cleanId.length < 8 || cleanId.length > 64 || !cleanName) {
    throw new Error('Invalid RSVP payload');
  }

  await setDoc(doc(db, 'invitations', INVITATION_ID, 'rsvp', cleanId), {
    name: cleanName,
    attendance: cleanAttendance,
    lang: cleanLang,
    updatedAt: serverTimestamp(),
  });

  return cleanId;
}

async function addWish({ author, text, date, lang }) {
  const cleanAuthor = String(author || '').trim().slice(0, 80);
  const cleanText = String(text || '').trim().slice(0, 600);
  const cleanDate = String(date || '').trim().slice(0, 20);
  const cleanLang = lang === 'ru' ? 'ru' : 'kg';

  if (!cleanAuthor || !cleanText || !cleanDate) {
    throw new Error('Invalid wish payload');
  }

  const ref = await addDoc(collection(db, 'invitations', INVITATION_ID, 'wishes'), {
    author: cleanAuthor,
    text: cleanText,
    date: cleanDate,
    lang: cleanLang,
    createdAt: serverTimestamp(),
  });

  return ref.id;
}

function subscribeWishes(onUpdate, onError) {
  const q = query(
    collection(db, 'invitations', INVITATION_ID, 'wishes'),
    orderBy('createdAt', 'desc'),
    limit(50)
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const items = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data && typeof data.author === 'string' && typeof data.text === 'string') {
          items.push({
            id: docSnap.id,
            author: data.author,
            text: data.text,
            date: typeof data.date === 'string' ? data.date : '',
          });
        }
      });
      if (typeof onUpdate === 'function') onUpdate(items);
    },
    (error) => {
      if (typeof onError === 'function') onError(error);
    }
  );
}

window.weddingFirebase = {
  app,
  db,
  saveRsvp,
  addWish,
  subscribeWishes,
};

window.dispatchEvent(new CustomEvent('wedding:firebase-ready'));
