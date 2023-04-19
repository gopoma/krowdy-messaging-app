import { useState } from 'react'
import { TypeMessageForm } from './TypeMessageForm'
import { ChannelsForm } from './ChannelsForm'
import { EmailForm } from './EmailForm'
import { TextMessageForm } from './TextMessageForm'
import { WhatsappForm } from './WhatsappForm'

const steps = [TypeMessageForm, ChannelsForm, EmailForm, TextMessageForm, WhatsappForm]

export const MessasingForm = () => {
  const [position, setPosition] = useState(0)

  return (
    <section className='p-4 flex flex-col gap-4'>
      { steps[position]() }
    </section>
  )
}
