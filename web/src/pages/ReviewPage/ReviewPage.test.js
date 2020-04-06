import { render, cleanup } from '@testing-library/react'

import ReviewPage from './ReviewPage'

describe('ReviewPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ReviewPage />)
    }).not.toThrow()
  })
})
