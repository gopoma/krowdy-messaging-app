import { useEffect, useMemo, useState } from 'react'
import { LinkedListContext } from './LinkedListContext'
import { NOT_FOUND, WITHOUT_ITEMS } from '../constants'

export const LinkedListProvider = ({ children }) => {
  const [position, setPosition] = useState(0) // 0 - 1 - 2 - 3 - 4
  const [length, setLength] = useState(WITHOUT_ITEMS) // 5
  const [forbiddenPositions, setForbiddenPositions] = useState(new Set())

  const firstPositionReached = useMemo(() => {
    if (forbiddenPositions.size === length) return false

    let firstNotForbiddenPosition

    for (let i = 0; i < length; i++) {
      if (!forbiddenPositions.has(i)) {
        firstNotForbiddenPosition = i
      }
    }

    return position === firstNotForbiddenPosition
  }, [position])

  const lastPositionReached = useMemo(() => {
    if (forbiddenPositions.size === 0) return true

    let lastNotForbiddenPosition

    for (let i = length - 1; i >= 0; i--) {
      if (!forbiddenPositions.has(i)) {
        lastNotForbiddenPosition = i
        break
      }
    }

    return position === lastNotForbiddenPosition
  }, [position])

  const _handleLengthChange = (newLength) => {
    if (newLength < 0) return

    setLength(newLength)
  }

  useEffect(() => {
    setForbiddenPositions((prevForbiddenPositions) => {
      const newForbiddenPositions = new Set(prevForbiddenPositions)

      newForbiddenPositions.forEach((position) => {
        if (position >= length) newForbiddenPositions.delete(position)
      })

      return newForbiddenPositions
    })
  }, [length])

  const _handleAddForbiddenPosition = (newForbiddenPosition) => {
    if (newForbiddenPosition < 0 || newForbiddenPosition > length - 1) return

    setForbiddenPositions((prevForbiddenPositions) => {
      const newForbiddenPositions = new Set(prevForbiddenPositions)

      newForbiddenPositions.add(newForbiddenPosition)

      return newForbiddenPositions
    })
  }

  const _handleDeleteForbiddenPosition = (forbiddenPosition) => {
    if (forbiddenPosition < 0 || forbiddenPosition > length - 1) return

    setForbiddenPositions((prevForbiddenPositions) => {
      const newForbiddenPositions = new Set(prevForbiddenPositions)

      newForbiddenPositions.delete(forbiddenPosition)

      return newForbiddenPositions
    })
  }

  const _handleGoNext = () => {
    setPosition((prevPosition) => {
      let nextNotForbiddenPosition = NOT_FOUND

      for (let i = prevPosition + 1; i < length; i++) {
        if (!forbiddenPositions.has(i)) {
          nextNotForbiddenPosition = i
          break
        }
      }

      return (nextNotForbiddenPosition === NOT_FOUND) ? prevPosition : nextNotForbiddenPosition
    })
  }

  const _handleGoBack = () => {
    setPosition((prevPosition) => {
      let previousNotForbiddenPosition = NOT_FOUND

      for (let i = prevPosition - 1; i >= 0; i--) {
        if (!forbiddenPositions.has(prevPosition)) {
          previousNotForbiddenPosition = i
          break
        }
      }

      return (previousNotForbiddenPosition === NOT_FOUND) ? prevPosition : previousNotForbiddenPosition
    })
  }

  return (
    <LinkedListContext.Provider
      value={{
        position,
        firstPositionReached,
        lastPositionReached,

        _handleLengthChange,
        _handleAddForbiddenPosition,
        _handleDeleteForbiddenPosition,
        _handleGoNext,
        _handleGoBack
      }}
    >
      { children }
    </LinkedListContext.Provider>
  )
}
