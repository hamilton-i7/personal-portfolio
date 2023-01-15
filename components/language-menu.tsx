import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'

type LanguageMenuProps = MenuProps & {
  onEnglishClick?: React.MouseEventHandler<HTMLLIElement>
  onSpanishClick?: React.MouseEventHandler<HTMLLIElement>
}

const LanguageMenu = ({
  anchorEl,
  open,
  onClose,
  onEnglishClick,
  onSpanishClick,
}: LanguageMenuProps) => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <Typography
        variant='subtitle1'
        component='p'
        color='primary'
        sx={{
          px: '1.6rem',
          mb: '0.8rem',
        }}>
        {t('change-language')}
      </Typography>
      <MenuItem onClick={onEnglishClick} selected={locale === 'en'}>
        English
      </MenuItem>
      <MenuItem onClick={onSpanishClick} selected={locale === 'es'}>
        Español
      </MenuItem>
    </Menu>
  )
}

export default LanguageMenu
