import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <>
      <Container sx={{ mt: 4, mb: 8 }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>
              About Us
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
            At FreshHarvest Hub, we are more than just a company; we are a passionate community dedicated to delivering the freshest and highest-quality produce to your doorstep. Our journey began with a simple vision – to redefine the way people experience freshness in their daily lives. With unwavering commitment and a meticulous selection process, we curate a diverse range of premium fruits, vegetables, and artisanal products sourced directly from local farms and trusted partners.            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
            Driven by a deep-rooted belief in sustainability and a farm-to-table philosophy, we strive to connect you with the essence of nature through our carefully selected offerings. Our team, comprised of experts in agriculture and quality assurance, works tirelessly to ensure that every product bearing the FreshHarvest Hub name meets the highest standards of freshness, taste, and nutritional value.            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography variant="body1">
            As we continue to grow, our dedication to promoting healthy living and supporting local communities remains steadfast. FreshHarvest Hub is not just a brand; it's a commitment to excellence, a celebration of nature's bounty, and a promise to enhance your well-being. Join us on this flavorful journey, and let FreshHarvest Hub be your trusted companion in cultivating a healthier and more vibrant lifestyle.            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Learn More
            </Button>
          </motion.div>
        </Paper>
      </Container>
    </>
  );
};

export default AboutUs;
