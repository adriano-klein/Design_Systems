import { j as t } from './jsx-runtime-Cpd0L3RJ.js'
import { useMDXComponents as i } from './index-DM70biLP.js'
import './index-tX-w0Vpj.js'
import { M as r } from './DocsRenderer-CFRXHY34-CMAHeMwg.js'
import './index-WI1YhYyJ.js'
import './_commonjsHelpers-Cpj98o6Y.js'
import './preview-CCMSudI2.js'
import './iframe-BK4vJM9T.js'
import './index-DF2RCeq5.js'
import './index-D8wlRbMj.js'
import './index-CBft-ReK.js'
import './index-DrFu-skq.js'
import './react-18-DgBYHT-8.js'
function e(n) {
  const o = { h1: 'h1', p: 'p', ...i(), ...n.components }
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(r, { title: 'Home' }),
      `
`,
      t.jsx(o.h1, { id: 'adriano-ignite-ui', children: 'Ignite UI' }),
      `
`,
      t.jsx(o.p, { children: 'Design System do Ignite.' }),
    ],
  })
}
function g(n = {}) {
  const { wrapper: o } = { ...i(), ...n.components }
  return o ? t.jsx(o, { ...n, children: t.jsx(e, { ...n }) }) : e(n)
}
export { g as default }
