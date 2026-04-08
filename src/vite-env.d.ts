declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_KEY: string
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}