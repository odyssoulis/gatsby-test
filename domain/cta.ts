import {getPage_ctas_nodes_metadata} from "../src/templates/__generated__/getPage";

export type ctaSlug =
  'cta-signup' |
  'cta-mission'

export type ICta = getPage_ctas_nodes_metadata & {slug: ctaSlug} 