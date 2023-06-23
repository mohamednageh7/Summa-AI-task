import i18n from '../i18n/i18n'

export  const handleLangChange = (lng:string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("lang",lng)
  }