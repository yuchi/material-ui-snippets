import snip from '../snip'
import { variants, colors } from './mui-button'

export const description = 'Material-UI <Button> with icon and label'
export const body = snip`
<Button
  variant="\${#${variants}}"
  color="\${#${colors}}"
  startIcon={$#}
  $#
>
  $0
</Button>
`
