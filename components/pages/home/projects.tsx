import { alpha, useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import projects from '../../../data/projects.json'
import Chip from '../../chip'
import TextButton from '../../button/text-button'
import { useTranslation } from 'next-i18next'
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded'
import GithubIcon from '@mui/icons-material/GitHub'

const Projects = () => {
  const theme = useTheme()

  return (
    <Box id='projects'>
      <Carousel
        fullHeightHover={false}
        height='100vh'
        autoPlay={false}
        swipe={false}
        navButtonsAlwaysInvisible={true}
        indicatorContainerProps={{
          style: {
            position: 'absolute',
            bottom: '2.4rem',
            left: 0,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
          },
        }}
        indicatorIconButtonProps={{
          style: {
            padding: '0.4rem',
            color: alpha('#71787E', 0.52),
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: alpha(theme.palette.common.white, 0.72),
          },
        }}>
        {projects.map((project, i) => {
          const position = i + 1 < 10 ? `0${i + 1}` : (i + 1).toString()

          return <Project key={i} project={project} position={position} />
        })}
      </Carousel>
    </Box>
  )
}

interface IProject {
  name: string
  description: string
  stack: string[]
  liveSite: string
  repository: string
  img: string
}

type ProjectProps = {
  project: IProject
  position: string
}

const Project = ({ project, position }: ProjectProps) => {
  const { t } = useTranslation()

  const preview = (
    <Box
      className='preview'
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        py: '1.6rem',
        px: { xs: '1.6rem', sm: '3.2rem', lg: '16.5rem', tv: '25rem' },
        mb: '3.2rem',
        transition: theme =>
          theme.transitions.create('opacity', {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeOut,
            delay: theme.transitions.duration.standard,
          }),
      }}>
      <Typography
        className='project-number'
        component='span'
        sx={{
          fontWeight: 700,
          fontSize: { xs: '20rem', tablet: '40rem' },
          lineHeight: { xs: '20rem', tablet: '40rem' },
          letterSpacing: { xs: '0.4rem', tablet: '0.8rem' },
          bottom: 0,
          position: 'absolute',
          zIndex: 1,
          color: theme => alpha(theme.palette.neutral.main, 0.24),
        }}>
        {position}
      </Typography>
      <Typography
        className='project-name'
        variant='h1'
        component='h3'
        sx={{
          color: theme => theme.palette.neutral.main,
          zIndex: 2,
          textAlign: 'center',
          mb: { xs: '1.6rem', tablet: '4.8rem' },
        }}>
        {project.name}
      </Typography>
    </Box>
  )

  const details = (
    <Stack
      className='details'
      sx={{
        textAlign: 'center',
        zIndex: 2,
        opacity: 0,
        position: 'relative',
        px: { xs: '1.6rem', sm: '3.2rem', lg: '16.5rem', tv: '25rem' },
        transition: theme =>
          theme.transitions.create('opacity', {
            duration: theme.transitions.duration.shortest,
          }),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Typography
        className='project-name'
        variant='h1'
        component='h3'
        sx={{
          color: theme => theme.palette.neutral.main,
          zIndex: 2,
          textAlign: 'center',
          mb: { xs: '4.8rem' },
        }}>
        {project.name}
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: theme => theme.palette.neutral.dark, mb: '3.2rem' }}>
        {project.description}
      </Typography>
      <Stack
        direction='row'
        component='ul'
        sx={{
          listStyle: 'none',
          mb: '4.8rem',
          padding: 0,
          flexWrap: 'wrap',
          gap: '0.8rem',
          justifyContent: 'center',
        }}>
        {project.stack.map(tech => (
          <Chip key={tech} label={tech} component='li' />
        ))}
      </Stack>
      <Stack
        sx={{
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          gap: '3.2rem',
        }}>
        <TextButton
          startIcon={<OpenInNewRounded />}
          href={project.liveSite}
          target='_blank'>
          {t('view-site')}
        </TextButton>
        <TextButton
          startIcon={<GithubIcon />}
          href={project.repository}
          target='_blank'>
          {t('view-code')}
        </TextButton>
      </Stack>
    </Stack>
  )

  return (
    <Box
      component='article'
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ':hover': {
          justifyContent: 'start',
          '& > .backdrop': {
            opacity: 1,
          },
          '& > .carousel-img': {
            transform: 'scale(1.08)',
          },
          '& .preview': {
            opacity: 0,
            transition: theme =>
              theme.transitions.create('opacity', {
                duration: theme.transitions.duration.short,
                easing: theme.transitions.easing.easeOut,
              }),
          },
          '& .details': {
            opacity: 1,
            transition: theme =>
              theme.transitions.create('opacity', {
                duration: theme.transitions.duration.short,
                delay: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeIn,
              }),
          },
        },
      }}>
      <Box
        className='carousel-img'
        sx={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.72)), center / cover no-repeat url(${project.img})`,
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          transition: theme =>
            theme.transitions.create(['transform'], {
              duration: theme.transitions.duration.complex,
              easing: theme.transitions.easing.easeIn,
            }),
        }}
      />
      <Box
        className='backdrop'
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: theme => alpha(theme.palette.common.black, 0.72),
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 0,
          opacity: 0,
          transition: theme =>
            theme.transitions.create('opacity', {
              duration: theme.transitions.duration.shortest,
            }),
        }}
      />
      {preview}
      {details}
    </Box>
  )
}

export default Projects
