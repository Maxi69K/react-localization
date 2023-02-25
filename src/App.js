import { useLocale } from './context/Locale'
import { REGIONS } from './context/Locale/constants'
import './styles.css'
import { interpolate } from './utils'

export default function App() {
  const { state, dispatch } = useLocale()
  const { strings, constants } = state

  const handleRegionChange = (region) => {
    const action = {
      type: 'CHANGE_LOCALE',
      payload: {
        region,
      },
    }

    dispatch(action)
  }

  return (
    <div className="App">
      {Object.keys(REGIONS).map((region) => (
        <button key={region} onClick={() => handleRegionChange(region)}>
          {region}
        </button>
      ))}

      <h1>{strings.heading}</h1>
      <h2>{strings.body_text}</h2>

      <p>
        {interpolate(strings.phone_text, { phoneCode: constants.phoneCode })}
      </p>
    </div>
  )
}
