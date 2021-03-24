import ContextSwitcher from './ContextSwitcher'
import { MemoryRouter, Route } from 'react-router-dom'

const Template = (args) => (
  <MemoryRouter initialEntries={['/gh/codecov']}>
    <Route path="/:provider/">
      <ContextSwitcher {...args} />
    </Route>
  </MemoryRouter>
)

const currentContext = {
  owner: {
    username: 'dorianamouroux',
    avatarUrl: 'https://github.com/dorianamouroux.png?size=40',
  },
  pageName: 'provider',
}

const contexts = [
  currentContext,
  {
    owner: {
      username: 'spotify',
      avatarUrl: 'https://github.com/spotify.png?size=40',
    },
    pageName: 'owner',
    options: {
      owner: 'spotify',
    },
  },
  {
    owner: {
      username: 'codecov',
      avatarUrl: 'https://github.com/codecov.png?size=40',
    },
    pageName: 'owner',
    options: {
      owner: 'codecov',
    },
  },
]

export const SimpleContextSwitcher = Template.bind({})
SimpleContextSwitcher.args = {
  currentContext,
  contexts,
}

export default {
  title: 'Components/ContextSwitcher',
  component: ContextSwitcher,
}
