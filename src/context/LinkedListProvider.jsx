import { useMemo, useState } from 'react'
import { LinkedListContext } from './LinkedListContext'

const NOT_FOUND = -16
const UNINITIALIZED = -25
const WITHOUT_ITEMS = 0

export const LinkedListProvider = ({ children }) => {
  const [position, setPosition] = useState(UNINITIALIZED) // 0 - 1 - 2 - 3 - 4
  const [length, setLength] = useState(WITHOUT_ITEMS) // 5
  const [forbiddenPositions, setForbiddenPositions] = useState(new Set())

  const firstPositionReached = useMemo(() => {
    if (forbiddenPositions.size === length) return false

    let firstNotForbiddenPosition = NOT_FOUND

    for (let i = 0; i < length; i++) {
      if (!forbiddenPositions.has(i)) {
        firstNotForbiddenPosition = i
      }
    }

    return position === firstNotForbiddenPosition
  }, [position])

  const lastPositionReached = useMemo(() => {
    if (forbiddenPositions.size === 0) return true
  }, [position])

  const _handleLengthChange = (newLength) => {
    if (newLength < 0) return

    setLength((prevLength) => {
      setForbiddenPositions((prevForbiddenPositions) => {
        const newForbiddenPositions = new Set(prevForbiddenPositions)

        if (newLength < prevLength) {
          for (let i = newLength - 1; i < prevLength - 1; i++) {
            newForbiddenPositions.delete(i)
          }
        }

        return newForbiddenPositions
      })
    })
  }

  const _handleAddForbiddenPosition = (newForbiddenPosition) => {
    if (newForbiddenPosition < 0 || newForbiddenPosition > length - 1) return

    setForbiddenPositions((prevForbiddenPositions) => {
      const newForbiddenPositions = new Set(prevForbiddenPositions)

      newForbiddenPositions.add(newForbiddenPosition)

      setForbiddenPositions(newForbiddenPositions)
    })
  }

  const _handleDeleteForbiddenPosition = (forbiddenPosition) => {
    if (forbiddenPosition < 0 || forbiddenPosition > length - 1) return

    setForbiddenPositions((prevForbiddenPositions) => {
      const newForbiddenPositions = new Set(prevForbiddenPositions)

      newForbiddenPositions.delete(forbiddenPosition)

      setForbiddenPositions(newForbiddenPositions)
    })
  }

  const _handleGoNext = () => {
    setPosition((prevPosition) => {
      let nextNotForbiddenPosition = NOT_FOUND

      for (let i = prevPosition + 1; i < length; i++) {
        if (!forbiddenPositions.has(i)) {
          nextNotForbiddenPosition = i
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
