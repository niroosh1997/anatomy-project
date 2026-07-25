/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Backend base URL, injected at build time by the deploy workflow. */
  readonly VITE_API_BASE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
