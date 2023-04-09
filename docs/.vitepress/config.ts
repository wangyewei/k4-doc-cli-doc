
type SocialList = {
  icon: string,
  link: string
}

type NavList = {
  text: string,
  link: string,
  activeMenu?: string
}

interface HeaderConifg {
  logo: { l: 'logo', v: string },
  nav: { l: 'nav', v: NavList[] },
  social: { l: 'socialLinks', v: SocialList[] }
}

type HeaderConifgUnion = HeaderConifg[keyof HeaderConifg]

type ThemeConfig = Record<keyof HeaderConifg, HeaderConifg[keyof HeaderConifg]['v']>

interface Config {
  title: string
  themeConfig: ThemeConfig
}


/////////////////// header config  //////////////////


const themeConfig = {} as ThemeConfig

/** logo */
const logo: string = "logo.svg"

/** nav */
const nav: NavList[] = [
  { text: '起步', link: '/setup/', activeMenu: '/setup/' },
  { text: '配置', link: '/settings/', activeMenu: '/settings/' }
]

/**social */
const socialLinks: SocialList[] = [
  { icon: 'github', link: 'https://github.com/wangyewei' }
]


const options: HeaderConifgUnion[] = [
  { l: 'logo', v: logo },
  { l: 'nav', v: nav },
  { l: 'socialLinks', v: socialLinks }
]


options.forEach(item => themeConfig[item.l] = item.v)


//////////////////  custom config  /////////////////


const title: string = 'k4doc-cli - 基于VitePress的脚手架'


const configger: Config = {
  title,
  themeConfig
}

export default configger