/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  github: {
    profile: {
      $url: (url?: { hash?: string }) => ({ pathname: '/github/profile' as const, hash: url?.hash })
    }
  },
  hooks: {
    customhooks: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/customhooks' as const, hash: url?.hash })
    },
    usecontext: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/usecontext' as const, hash: url?.hash })
    },
    useeffect: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/useeffect' as const, hash: url?.hash })
    },
    usememo: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/usememo' as const, hash: url?.hash })
    },
    usestate: {
      $url: (url?: { hash?: string }) => ({ pathname: '/hooks/usestate' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
