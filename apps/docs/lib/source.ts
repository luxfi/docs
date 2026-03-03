import { docs } from '@/.docs/server';
import { loader } from '@hanzo/docs/core/source';

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
});
