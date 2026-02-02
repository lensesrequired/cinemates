import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Welcome to CineMates
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          For watchlists with friends!
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          Never spend another movie night scrolling endlessly through streaming
          services. CineMates helps you and your friends create shared
          watchlists and decide what to watch together.
        </Typography>
        <Link href="/login" passHref style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Link>
      </Box>

      <Stack spacing={4} sx={{ mt: 6 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
          }}
        >
          <GroupIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Create Shared Watchlists
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Build collaborative movie lists with your friends, family, or
              movie club. Everyone can add their favorite films and discover new
              ones together.
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
          }}
        >
          <HowToVoteIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Vote Together
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Can&apos;t decide what to watch? Let everyone vote on their
              favorites and pick a movie democratically. No more endless
              debates!
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Track What You&apos;ve Watched
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Mark movies as watched and keep track of your viewing history. See
              what your group has already enjoyed together.
            </Typography>
          </Box>
        </Paper>
      </Stack>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to start your movie journey?
        </Typography>
        <Link href="/login" passHref style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Create Your First Watchlist
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
