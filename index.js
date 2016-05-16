// Require the module and set default options 
// You may use almost any option available in nodemailer,  
// but if you need fine tuning I'd recommend to consider using nodemailer directly. 

var creds = require('./password.json');

var send = require('gmail-send')({
  user: creds.account,               // Your GMail account used to send emails 
  pass: creds.password,             // Application-specific password 
  to:   'slash.tu@nexusguard.com',      // Send back to yourself 
  // from:   '"User" <user@gmail.com>'  // from: by default equals to user 
  // replyTo:'user@gmail.com'           // replyTo: by default undefined 
  subject: 'test subject',
  text:    'test text'
  // html:    '<b>html text text</b>' 
});
 
// var file = './demo.js';        // File to attach 
 
// Override any default option and send email 
send({                         
  // subject: 'attached '+file,   // Override value set as default  
  // files: [file]                // String or array of strings of filenames to attach 
}, function (err, res) {
  console.log('send(): err:', err, '; res:', res);
});