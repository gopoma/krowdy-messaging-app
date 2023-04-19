import { useModalStore } from '../hooks/useModalStore'
import { TemplateModal, MessasingForm } from './'

export const CustomModal = () => {
  const { component } = useModalStore()

  switch (component) {
    case 'MessasingForm': {
      return (
        <TemplateModal>
          <MessasingForm />
        </TemplateModal>
      )
    }
    default: {
      return <section>No Component Rendered Yet</section>
    }
  }
}
