import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

exports.onOrderCreated = functions.firestore
  .document('orders/{orderDocId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    if (data.orderId) {
      return null; // Already has an ID
    }

    // Generate Order ID
    const dateStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const counterRef = db.collection('metadata').doc(`orderCounter_${dateStr}`);

    try {
      const orderId = await db.runTransaction(async (transaction) => {
        const counterDoc = await transaction.get(counterRef);
        let count = 1;
        if (counterDoc.exists) {
          count = (counterDoc.data()?.count || 0) + 1;
        }
        transaction.set(counterRef, { count }, { merge: true });

        // Format: LD24 + padded count
        const paddedCount = String(count).padStart(4, '0');
        const generatedId = `LD24${paddedCount}`;
        
        transaction.update(snap.ref, { 
          orderId: generatedId,
          status: 'Pending',
          timeline: admin.firestore.FieldValue.arrayUnion({
            status: 'Pending',
            timestamp: new Date().toISOString(),
            note: 'Order placed'
          })
        });

        return generatedId;
      });

      console.log(`Successfully generated orderId: ${orderId}`);

      // TODO: Implement background WhatsApp notification HTTP calls using Twilio/MessageBird/etc.
      // Currently the spec mentions "https://wa.me/" format, which is for client side click-to-chat.
      // Automated background texts require an API provider.

    } catch (error) {
      console.error('Error generating order ID:', error);
    }
    
    return null;
  });
