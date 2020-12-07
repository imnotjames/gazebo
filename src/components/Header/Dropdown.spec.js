import { render, screen, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { useUser } from 'services/user'
import { useNav } from 'services/header'

import Dropdown from './Dropdown'

jest.mock('services/header')
jest.mock('services/user')

const mockNavContext = {
  user: [{ label: 'Chatty Ghosts', to: '/👻/👅', imageUrl: '🗣.png' }],
}
const mockUseUser = [{ username: 'Shaggy', avatarUrl: '🚶‍♂️.jpeg' }]

describe('Dropdown', () => {
  function setup() {
    render(
      <MemoryRouter>
        <Dropdown />
      </MemoryRouter>
    )
  }

  describe('check rendered links', () => {
    beforeEach(() => {
      useNav.mockReturnValue(mockNavContext)
      useUser.mockReturnValue(mockUseUser)

      setup()
    })

    it('renders user context links', () => {
      mockNavContext.user.forEach((link) => {
        const navLink = screen.getByText(link.label).closest('a')
        expect(navLink).toHaveAttribute('href', link.to)
      })
    })
  })

  describe('opens Dropdown', () => {
    beforeEach(() => {
      useNav.mockReturnValue(mockNavContext)
      useUser.mockReturnValue(mockUseUser)

      setup()
    })
    it('clicking on user opens the Dropdown', () => {
      const toggle = screen.getByRole('button')

      expect(screen.getByRole('menu')).toHaveClass('hidden')
      act(() => {
        toggle.click()
      })
      expect(screen.getByRole('menu')).not.toHaveClass('hidden')
    })
  })
})
