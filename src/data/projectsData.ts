import { Project } from '../types';
import { projectImages } from './imagesData';

// All project-related data stored here for easy management
export const projects: Project[] = [
  {
    id: "proj1",
    title: "Network Infrastructure Optimization",
    description: "Complete overhaul of the company's network infrastructure, including cable management, network topology redesign, and performance optimization.",
    technologies: ["Cisco", "Network Management", "Cable Management"],
    beforeImage: projectImages.networkBefore, // 📸 REPLACE: Network before optimization
    afterImage: projectImages.networkAfter,   // 📸 REPLACE: Network after optimization
    improvements: [
      "Reduced network latency by 40%",
      "Improved cable organization and accessibility",
      "Enhanced network security protocols",
      "Streamlined maintenance procedures"
    ]
  },
  {
    id: "proj2",
    title: "Server Room Modernization",
    description: "Comprehensive server room upgrade focusing on cooling efficiency, power management, and equipment organization.",
    technologies: ["Server Management", "Cooling Systems", "Power Management"],
    beforeImage: projectImages.serverBefore, // 📸 REPLACE: Server room before upgrade
    afterImage: projectImages.serverAfter,   // 📸 REPLACE: Server room after upgrade
    improvements: [
      "Reduced power consumption by 30%",
      "Improved cooling efficiency",
      "Better space utilization",
      "Enhanced monitoring systems"
    ]
  },
  {
    id: "proj3",
    title: "Workstation Setup Optimization",
    description: "Redesign of employee workstations to improve ergonomics, cable management, and overall efficiency.",
    technologies: ["Ergonomics", "Cable Management", "Workspace Design"],
    beforeImage: projectImages.workstationBefore, // 📸 REPLACE: Workstation before optimization
    afterImage: projectImages.workstationAfter,   // 📸 REPLACE: Workstation after optimization
    improvements: [
      "Enhanced workspace organization",
      "Improved ergonomics",
      "Better cable management",
      "Increased productivity"
    ]
  }
];

// Projects component stored here for easy control
export const ProjectsComponent = () => {
  // Component implementation would go here if needed
  return null;
};