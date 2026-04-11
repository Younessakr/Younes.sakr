// All image URLs stored here for easy management and control

export const profileImages = {
  hero: "/MEE.PNG", // 📸 PROFILE IMAGE: Replace with your profile photo (recommended: 400x400px)
  // Add more profile images here as needed
};

export const projectImages = {
  // 🔧 PROJECT 1: Maintenance & Réparation Informatique
  maintenanceBefore: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  maintenanceAfter: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg",

  // 🌐 PROJECT 2: Installation Réseaux & Infrastructure
  networkBefore: "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg",
  networkAfter: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",

  // 📹 PROJECT 3: Vidéosurveillance & Systèmes d'Alarme
  securityBefore: "https://images.pexels.com/photos/8386622/pexels-photo-8386622.jpeg",
  securityAfter: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",

  // 🔐 PROJECT 4: Contrôle d'Accès & Sécurité
  accessBefore: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  accessAfter: "https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg",
};

export const certificationImages = {
  // 🏆 CERTIFICATIONS: Add your certificate images here
  default: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg", // 📸 DEFAULT: Generic certificate placeholder
  
  // 📜 SPECIFIC CERTIFICATES: Replace with actual certificate images
  microsoft: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg", // 📸 Microsoft Office Certificate
  linkedin1: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg", // 📸 LinkedIn System Admin
  linkedin2: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg", // 📸 LinkedIn Windows Server
  linkedin3: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg", // 📸 LinkedIn IT Help Desk
  linkedin4: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg", // 📸 LinkedIn Python
  odc1: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",     // 📸 ODC React Certificate
  odc2: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",     // 📸 ODC AI Workflows
  odc3: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",     // 📸 ODC E-commerce Design
  odc4: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",     // 📸 ODC HTML CSS
  odc5: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",     // 📸 ODC Smartphone Flash
};

export const stockImages = {
  technology: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
  office: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
  network: "https://images.pexels.com/photos/2194062/pexels-photo-2194062.jpeg",
  server: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
};

// Image management utilities
export const getImageUrl = (category: keyof typeof stockImages, fallback?: string) => {
  return stockImages[category] || fallback || stockImages.technology;
};

export const updateImageUrl = (category: string, newUrl: string) => {
  // Function to update image URLs programmatically
  console.log(`Updating ${category} image to: ${newUrl}`);
};