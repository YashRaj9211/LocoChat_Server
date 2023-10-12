import express from 'express';
import User from '../model/user-model.js'

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
  
    try {
      const user = await User.findOne({ username, password });
  
      if (user) {
  
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  function generateToken(user) {
  }
  
export default router;
  