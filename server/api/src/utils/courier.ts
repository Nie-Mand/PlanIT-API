import { CourierClient } from '@trycourier/courier'

export const sendEmail = async (eventId: string | undefined, recipientId: string, data: any) => {
  const courier = CourierClient({
    authorizationToken: process.env.COURIER_TOKEN,
  })

  await courier.send({
    eventId: eventId || '',
    recipientId,
    data,
    profile: {
      email: recipientId,
    },
  })
}
