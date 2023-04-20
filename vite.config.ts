import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Soy Pablo",
        short_name: "Soy Pablo",
        theme_color: "#e30d18",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icons/96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icons/48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => {
              const { destination } = request;

              return destination === "audio";
            },
            handler: "CacheFirst",
            options: {
              cacheName: "audio-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            }
          }
        ]
      }
    }),
  ],
})
