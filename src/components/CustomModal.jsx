import { useModalStore } from '../hooks/useModalStore'
import { LinkedListProvider } from '../context/LinkedListProvider'
import { TemplateModal, MessasingForm } from './'

export const CustomModal = () => {
  const { component } = useModalStore()

  let $component

  switch (component) {
    case 'MessasingForm': {
      $component = (
        <LinkedListProvider>
          <MessasingForm />
        </LinkedListProvider>
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
