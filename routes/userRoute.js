// user.route.ts
import express from 'express';
import User from '../model/User.js'

const router = express.Router(); 

router.post('/addUser', async (req, res) => {
  try {
    const { userId, userEmail } = req.body;
    const user = new User({ userId, userEmail });
    await user.save();
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// export default router;
// module.exports = router;
export default router
