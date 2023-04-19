import { useState } from 'react'
import { TypeMessageForm, ChannelsForm, EmailForm, TextMessageForm, WhatsappForm } from './'

const steps = [TypeMessageForm, ChannelsForm, EmailForm, TextMessageForm, WhatsappForm]

export const MessasingForm = () => {
  const [position, setPosition] = useState(1)

  return (
    <section className='p-4 flex flex-col gap-4'>
      { steps[position] }
    </section>
  )
}
