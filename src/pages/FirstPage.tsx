import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';
import { useNavigate } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://www.terraevents.ro/wp-content/uploads/2019/07/party.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();

  const navigate = useNavigate();
  function goToLogin() {
    navigate('/login')
  }

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>🏙Meetplace</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Find the perfect location for business events ranging from congress and conferences to cocktails and corporate parties. 
          We help you find feature state-of-the-art technical and design facilities and easily adaptable to diverse events. 
          We are here for you to create a unique experience. 👨‍👩‍👧‍👦
        </Text>

        <Button onClick={goToLogin} variant="gradient" gradient={{ from: '#a922e6', to: '#15aabf', deg: 45 }} size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}