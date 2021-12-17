import Campaign from '../models/Campaign.js';

export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const saveCampaign = async (req, res) => {
  console.log(req.body);
  const campaign = new Campaign(req.body);
  
  try {
    const saveCampaign = await campaign.save();
    res.status(201).json(saveCampaign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}