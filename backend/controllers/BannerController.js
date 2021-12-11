import Banner from '../models/Banner.js';

export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveBanner = async (req, res) => {
  const banner = new Banner(req.body);

  try {
    const saveBanner = await banner.save();
    res.status(201).json(saveBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};