import { useTranslation } from 'next-i18next'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const COOLDOWN = 1_800

const Traits = () => {
  const { t } = useTranslation()

  return (
    <TypeAnimation
      sequence={[
        `${t('developer')}`,
        COOLDOWN,
        `${t('team-player')}`,
        COOLDOWN,
        `${t('problem-solver')}`,
        COOLDOWN,
        `${t('gamer')}`,
        COOLDOWN,
        `${t('musician')}`,
        COOLDOWN,
      ]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      speed={1}
    />
  )
}

export default Traits
