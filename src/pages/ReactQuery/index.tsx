import React from 'react'
import { getSharedComponent } from '../..'

export function ReactQueryPage() {
  let SharedComponent: React.ElementType | null = null

  try {
    SharedComponent = getSharedComponent()
  } catch (error: unknown) {
    console.error(error)
  }

  return (
    <>
      <div>test page</div>
      {SharedComponent && (
        <SharedComponent msg="hello from react">
          <div> child component </div>
        </SharedComponent>
      )}
    </>
  )
}
