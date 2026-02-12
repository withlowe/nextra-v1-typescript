import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { CornellNote, Cues, Notes } from '@/components/cornell-note'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents: typeof getDocsMDXComponents = (components) => ({
  ...docsComponents,
  CornellNote,
  Cues,
  Notes,
  ...components
})
