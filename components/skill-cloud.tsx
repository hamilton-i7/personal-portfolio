import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Cloud, ICloud } from 'react-icon-cloud'
import skills from '../data/skills.json'
import Link from './link'

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
      maxWidth: 'unset',
    },
  },
  options: {
    clickToFront: 500,
    depth: 1.1,
    imageScale: 2,
    initial: [0.3, -0.1],
    outlineColour: '#0000',
    wheelZoom: false,
    fadeIn: 3_000,
    freezeDecel: true,
    freezeActive: true,
    shuffleTags: true,
    shape: 'sphere',
    noSelect: true,
    zoom: 0.8,
  },
}

const SkillCloud = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Cloud
        id='fdaf3773-3e8e-46c0-b696-7a4934c72217'
        {...cloudProps}
        canvasProps={{
          style: {
            width: '100%',
            maxWidth: 'unset',
          },
        }}>
        {skills.map(skill => (
          <Link key={skill.name} href={skill.link}>
            <Typography
              component='a'
              sx={{ color: theme => theme.palette.primary.main }}>
              {skill.name}
            </Typography>
          </Link>
        ))}
      </Cloud>
    </Box>
  )
}

export default SkillCloud
