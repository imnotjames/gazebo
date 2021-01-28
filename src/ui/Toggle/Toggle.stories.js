import { useState } from 'react'
import Toggle from './Toggle'

const Template = (args) => {
  const [toggle, setToggle] = useState(false)
  return <Toggle value={toggle} onClick={() => setToggle(!toggle)} {...args} />
}

export const NormalToggle = Template.bind({})
NormalToggle.args = {
  label: 'sr label',
}

export default {
  title: 'Components/Toggle',
  component: Toggle,
}
