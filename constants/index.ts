import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { resolveOgpImage } from './../lib/ogp-image-resolver'

export const siteInfo = {
  title: `Asahi's Photo Gallery`,
  description: `Asahi's Photo Gallery where you can see my photos taken at many places!!`,
  image: resolveOgpImage(),
  url: 'https://photos.takenouchi.work',
  author: '@ashtkn',
}

export const siteTitleText = `Asahi's Photo Gallery`
export const siteWelcomeText = 'Welcome!'
export const copyrightText = '©️ 2020 Asahi Takenouchi'

export const snsAccountList = [
  {
    href: `https://www.instagram.com/ash.take`,
    icon: faInstagram,
  },
  {
    href: `https://www.facebook.com/asahi.taken`,
    icon: faFacebook,
  },
]
