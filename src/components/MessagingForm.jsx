import { useContext, useEffect } from 'react'
import { LinkedListContext } from '../context/LinkedListContext'
import { TypeMessageForm } from './TypeMessageForm'
import { ChannelsForm } from './ChannelsForm'
import { EmailForm } from './EmailForm'
import { TextMessageForm } from './TextMessageForm'
import { WhatsappForm } from './WhatsappForm'

export const MessagingForm = () => {
  // eslint-disable-next-line
  const steps = [<TypeMessageForm />, <ChannelsForm />, <EmailForm />, <TextMessageForm />, <WhatsappForm />]
  const { position, _handleLengthChange } = useContext(LinkedListContext)

  useEffect(() => {
    _handleLengthChange(steps.length)
  }, [])

  return (
    <section className='p-4 flex flex-col gap-4'>
      { steps[position] }
    </section>
  )
}
