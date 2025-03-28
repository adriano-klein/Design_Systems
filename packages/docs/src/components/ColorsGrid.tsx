import { colors } from '@adriano-ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div>
      {Object.entries(colors).map(([key, color]) => {
        return (
          <div key={key} style={{ background: color, padding: '2rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
              }}
            >
              <strong>${key}</strong>
              <span>{color}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
