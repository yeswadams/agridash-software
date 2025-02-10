const AfricasTalking = require('africastalking');

// Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: 'atsk_89a3d0b325d102c17f265abbc03b52b2c7dd2d986e23ef1e39cc25ef29cc5e20d486128f',
  username: 'sandbox',
});

module.exports = async function sendSMS() {
    try {
        const result = await africastalking.SMS.send({
        to: '+254740803075',   // or use an array: ['0740803075']
        message: 'Hey Adams! Wassup...',
        from: '6741'// ensure this is the correct shortcode/sender ID
        });
        console.log(result);
    } catch (ex) {
        console.error(ex);
    }
};
