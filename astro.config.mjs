// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({

    site: 'https://Marcelo200221.github.io',
    base: '/portafolio',
    integrations: [
        tailwind(),
        astroIcon({
            include: {
                'simple-icons': ['*'],
                'lucide': ['*']
            }
        })
    ]
});
