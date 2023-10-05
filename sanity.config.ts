/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import {muxInput} from 'sanity-plugin-mux-input'
import myTheme from '@/themes/sanityStudioTheme'

export default defineConfig({
  basePath: '/admin/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    visionTool({defaultApiVersion: apiVersion}),
    muxInput()
  ],

  theme: myTheme
})
