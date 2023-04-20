import { useModalStore } from '../hooks/useModalStore'
import { LinkedListProvider } from '../context/LinkedListProvider'
import { MessagingFormProvider } from '../context/MessagingFormProvider'
import { TemplateModal, MessagingForm } from './'

export const CustomModal = () => {
  const { component } = useModalStore()

  let $component

  switch (component) {
    case 'MessagingForm': {
      $component = (
        <MessagingFormProvider>
          <LinkedListProvider>
            <MessagingForm />
          </LinkedListProvider>
        </MessagingFormProvider>
      )
      break
    }
    default: {
      $component = (<section>No Component Rendered Yet</section>)
    }
  }

  return (
    <TemplateModal>{ $component }</TemplateModal>
  )
}
