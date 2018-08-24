import Select, { Creatable } from 'react-select'

// For demo styleguide only!
export const BareSelector = props => (
  <Select {...props} />
)

const updateNewValue = onChange => vals => onChange(vals && vals.value)

const returnNewValue = vals => vals && ({ label: vals, value: vals })

const Selector = ({
  meta: { touched, error },
  input: { value, onChange, onBlur },
  ...rest
}) => rest.creatable ? (
  <Creatable
    {...rest}
    onBlur={() => onBlur()}
    onChange={updateNewValue(onChange)}
    value={returnNewValue(value)}
    className={`${touched && error && '-hasError'}`}
  />
) : (
  <Select
    {...rest}
    onChange={updateNewValue(onChange)}
    value={value}
    className={`${touched && error && '-hasError'}`}
  />
)

export default Selector
