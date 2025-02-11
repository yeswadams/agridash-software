const AfricasTalking = require('africastalking');

// Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: '',
  username: '',
});

module.exports = async function sendSMS() {
    try {
        const result = await africastalking.SMS.send({
        to: '',   // or use an array: ['0740803075']
        message: 'Hey Adams! We have the best offer for you',
        from: '6741'// can be an alphanumeric or Shortcode ID
        });
        console.log(result);
    } catch (ex) {
        console.error(ex);
    }
};
