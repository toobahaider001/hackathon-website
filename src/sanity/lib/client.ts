import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token: 'skop8KzMGb7SN7g6M4tpoWOoUBibDYImH2PHpBeNhqF8d46CT854YThLHPbKqyW701rWYuTNL1M7u5SyM2V9lj13Eld7SfEyPMbQea6DHwUlSSBdSgH1Oj7vFHQaSlHAt8bYURUvHQcNrmRFZw6RsXvlxyDmAT1fl12tVgYTUWaGPR3PXIvR'
})
