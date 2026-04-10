import { z } from 'zod/v4';
import {
  resolveConfigReference,
  resolveOptionalConfigReference,
} from './utils';

export const brandingSchema = z.object({
  appName: z.string().default('Hoot').transform(resolveConfigReference),
  logoUrl: z.string().optional().transform(resolveOptionalConfigReference),
  faviconUrl: z.string().optional().transform(resolveOptionalConfigReference),
  primaryColor: z.string().default('#4F46E5').transform(resolveConfigReference),
  secondaryColor: z.string().default('#111827').transform(resolveConfigReference),
  welcomeTitle: z.string().default('Welcome!').transform(resolveConfigReference),
  welcomeSubtitle: z.string().optional().transform(resolveOptionalConfigReference),
  supportEmail: z.string().optional().transform(resolveOptionalConfigReference),
});