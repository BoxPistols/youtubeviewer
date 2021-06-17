// export const parameters = {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//         matchers: {
//             color: /(background|color)$/i,
//             date: /Date$/,
//         },
//     },
// }

import React from 'react'
import { MemoryRouter } from 'react-router'
import { addDecorator } from '@storybook/react'

addDecorator((storyFn) => <MemoryRouter initialEntries={['/', 'posts']}>{storyFn()}</MemoryRouter>)
