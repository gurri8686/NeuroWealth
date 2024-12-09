import {useState,useEffect} from 'react';
import { LinearProgress,Typography  } from '@mui/material';
import { Card, CardContent, Box } from '@mui/material';
import MindImg from "../../assets/mind.png";
interface EnhancedProgressBarProps {
    score: number;  
  }
  

const EnhancedProgressBar : React.FC<EnhancedProgressBarProps>= ({ score }) => {
  const scoreText = `Brain Optimization Level ${score}% `;
  let progressText = "You're making great progress!";
  
  if (score < 20) {
    progressText = "Starting the journey to optimizing your brain.";
  } else if (score < 50) {
    progressText = "Building a strong foundation for mental clarity.";
  } else if (score < 80) {
    progressText = "Keep up the momentum — you're halfway there.";
  } else {
    progressText = "Congratulations! You’ve reached an exceptional brain optimization level.";
  }
    return (
      <Card
      sx={{
        width: '700px',
        margin: '20px auto',
        borderRadius: '16px',
        background: '#fff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding:'50px 0 50px'
      }}
    >
      <CardContent sx={{ padding: '20px'}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>
          Neural Pattern Score
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: '20px', }}>
          <img
            src={MindImg}
            alt="Neural Pattern"
            style={{
              width: '100px',
              margin:'20px auto 30px',
              height: 'auto',
            }}
          />
        </Box>
        <Box sx={{ position: 'relative', marginBottom: '20px' }}>
          <LinearProgress
            variant="indeterminate"
            value={score}
          />
        </Box>

        <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: '500', marginBottom: '40px' }}>
          {scoreText}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#666' }}>
          {progressText}
        </Typography>
     
      </CardContent>
    </Card>
    );
  };

const NeuralPatternScore = () => {
    const [score, setScore] = useState(0);

    // Simulating score change
    useEffect(() => {
      const randomScore = Math.floor(Math.random() * 81) + 20;  // Random number between 20 and 100
      setScore(randomScore);
  
      const interval = setInterval(() => {
        const randomScore = Math.floor(Math.random() * 81) + 20;  // Random number between 20 and 100
        setScore(randomScore);
      }, 1000);
  
      // Clean up interval
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
         <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
         <Typography variant="h4" component="h1" sx={{ fontWeight: '500', marginBottom: 2, fontSize: '1.8rem' }}>
          Neural Pattern Score Overview
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 800, margin: '0 auto', color: '#555' }}>
          Your brain optimization journey is powered by neural pattern analysis. This score represents your
          progress in optimizing your mental clarity, focus, and overall brain health.
        </Typography>
      </Box>
        <EnhancedProgressBar score={score} />
      </div>
    );
};

export default NeuralPatternScore;
