import snip from '../snip'
import { labelPlacements } from './mui-form-control'

export const description =
  'Material-UI <Radio> with <FormControlLabel> with labelPlacement'

export const body = snip`
<FormControlLabel value="$#" label="$#" labelPlacement="\${#${labelPlacements}}" control={<Radio $0 />} />
`
