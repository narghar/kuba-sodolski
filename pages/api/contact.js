import { sendEmail } from 'utils/server/email';
import { getConfig } from 'utils/config';

const { contactEmail } = getConfig();

export default async function handler(req, res) {
  const { firstName, lastName, email, phone, message } = req.body;

  const data = await sendEmail({
    from: `"${firstName} ${lastName}" <${email}>`,
    to: contactEmail,
    subject: `Wiadomość od ${firstName} ${lastName}`,
    text: `
      Wiadomosć od:
      Imię i nazwisko: ${firstName} ${lastName}
      Email: ${email}
      Telefon: ${phone}
      
      ${message}      
    `
  })

  if (data.messageId) {
    res.status(200).json({ success: true })
  } else {
    res.status(500).json({ success: false })
  }
};
