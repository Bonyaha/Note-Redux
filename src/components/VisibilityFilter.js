import { filterChange } from '../reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(({ filter }) => filter)

  return (
    <div>
      all{' '}
      <input
        type='radio'
        name='filter'
        checked={filter === 'ALL'}
        onChange={() => dispatch(filterChange('ALL'))}
      />
      important{' '}
      <input
        type='radio'
        name='filter'
        checked={filter === 'IMPORTANT'}
        onChange={() => dispatch(filterChange('IMPORTANT'))}
      />
      nonimportant{' '}
      <input
        type='radio'
        name='filter'
        checked={filter === 'NONIMPORTANT'}
        onChange={() => dispatch(filterChange('NONIMPORTANT'))}
      />
    </div>
  )
}

export default VisibilityFilter
