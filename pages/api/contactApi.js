// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');

mail.setApiKey("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");

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'philipkvam91@gmail.com',
    from: 'ph_kvam@hotmail.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};