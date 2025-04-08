import About from '@/components/About';
import Banner from '@/components/Banner';
import ContactSection from '@/components/ContactSection';
import Project from '@/components/Project';
import SkillsCard from '@/components/SkillsCard';
import React from 'react';

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <SkillsCard></SkillsCard>
      <Project></Project>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Homepage;