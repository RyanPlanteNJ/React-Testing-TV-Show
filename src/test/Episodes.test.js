import React from 'react'
import { render } from '@testing-library/react'
import Episodes from '../components/Episodes'

test('Episdoes', () => {
  const { getTestById } = render(<Episodes episodes={[]} />)
})