declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}