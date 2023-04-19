import { useAppDispatch, useAppSelector } from './useStore'
import { onAddReceiver, onDeleteReceiver } from '../store'
import { useEffect, useMemo } from 'react'

export const useReceiversStore = () => {
  const dispatch = useAppDispatch()
  const { receivers } = useAppSelector((state) => state.receivers)
  const hasReceivers = useMemo(() => receivers.length !== 0, [receivers])

  useEffect(() => {
    localStorage.setItem('receivers', JSON.stringify(receivers))
  }, [receivers])

  const toggleReceiver = (user) => {
    if (receivers.some((receiver) => receiver.id === user.id)) {
      dispatch(onDeleteReceiver(user))
    } else {
      dispatch(onAddReceiver(user))
    }
  }

  return {
    receivers,
    hasReceivers,

    toggleReceiver
  }
}
