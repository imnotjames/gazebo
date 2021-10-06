import PropTypes from 'prop-types'

import Checkbox from 'ui/Checkbox'
import TextInput from 'ui/TextInput'

import { TYPE_PROJECTS, GOALS } from './config'

const TYPE_PROJECTS_CHECKBOXES = [
  {
    label: 'Personal',
    value: TYPE_PROJECTS.PERSONAL,
  },
  {
    label: 'Your organization',
    value: TYPE_PROJECTS.YOUR_ORG,
  },
  {
    label: 'Open source',
    value: TYPE_PROJECTS.OPEN_SOURCE,
  },
  {
    label: 'Educational',
    value: TYPE_PROJECTS.EDUCATIONAL,
  },
]

const GOALS_CHECKOXES = [
  {
    label: 'Just starting to write tests',
    value: GOALS.STARTING_WITH_TESTS,
  },
  {
    label: 'Improving my code coverage',
    value: GOALS.IMPROVE_COVERAGE,
  },
  {
    label: 'Maintaining my code coverage',
    value: GOALS.MAINTAIN_COVERAGE,
  },
  {
    label: 'Team / regulatory requirement',
    value: GOALS.TEAM_REQUIREMENTS,
  },
]

function toggleInList(list, elem) {
  return list.includes(elem)
    ? list.filter((item) => item !== elem)
    : [...list, elem]
}

function FormInformation({ form }) {
  const { typeProjects, goals, otherGoal } = form.watch()

  function updateState(fieldName, list, value) {
    return () => form.setValue(fieldName, toggleInList(list, value))
  }

  return (
    <div>
      <h3 className="font-semibold">What type of projects brings you here?</h3>
      {TYPE_PROJECTS_CHECKBOXES.map(({ label, value }) => (
        <Checkbox
          label={label}
          key={value}
          onChange={updateState('typeProjects', typeProjects, value)}
          checked={typeProjects.includes(value)}
        />
      ))}
      <h3 className="font-semibold">What is your goal we can help with?</h3>
      {GOALS_CHECKOXES.map(({ label, value }) => (
        <Checkbox
          label={label}
          key={label}
          onChange={updateState('goals', goals, value)}
          checked={goals.includes(value)}
        />
      ))}
      <div className="flex items-start">
        <Checkbox
          label="Other"
          showLabel={false}
          onChange={updateState('goals', goals, GOALS.OTHER)}
          checked={goals.includes(GOALS.OTHER) || otherGoal.length > 0}
        />
        <TextInput placeholder="Other" {...form.register('otherGoal')} />
      </div>
    </div>
  )
}

FormInformation.propTypes = {
  form: PropTypes.shape({
    watch: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
  }).isRequired,
}

export default FormInformation
