import express from "express";
import ActiveUser from "../model/ActiveUser.js";
const router = express.Router();

router.post("/activeUsers", async (req, res) => {
  try {
    const { userId, userName, userLocation } = req.body;
    const activeUser = new ActiveUser({ userId, userName, userLocation });
    await activeUser.save();
    res.status(201).json({ message: "Active user data stored successfully" });
  } catch (error) {
    console.error("Error storing active user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/activeUsers/nearby", async (req, res) => {

  const userLongitude = req.query.longitude;
  const userLatitude = req.query.latitude;

  const agg = [
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(userLongitude), parseFloat(userLatitude)],
        },
        distanceField: "distance",
        maxDistance: 10,
        includeLocs: "userLocation",
        key: "userLocation",
      },
    },
  ];

  try {
    const result = await ActiveUser.aggregate(agg);
    res.json(result);
  } catch (error) {
    console.error("Error fetching nearby users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
