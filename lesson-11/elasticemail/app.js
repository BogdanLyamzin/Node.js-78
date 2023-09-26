import ElasticEmail from '@elasticemail/elasticemail-client';
import "dotenv/config";

const {ELASTICEMAIL_FROM, ELASTICEMAIL_API_KEY} = process.env;
 
const defaultClient = ElasticEmail.ApiClient.instance;
 
const {apikey} = defaultClient.authentications;
apikey.apiKey = ELASTICEMAIL_API_KEY;
 
const api = new ElasticEmail.EmailsApi()
 
const email = ElasticEmail.EmailMessageData.constructFromObject({
  Recipients: [
    new ElasticEmail.EmailRecipient("deyena9429@ipniel.com")
  ],
  Content: {
    Body: [
      ElasticEmail.BodyPart.constructFromObject({
        ContentType: "HTML",
        Content: "<strong>Test email</strong>"
      })
    ],
    Subject: "Test email",
    From: ELASTICEMAIL_FROM
  }
});
 
const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};

api.emailsPost(email, callback);
