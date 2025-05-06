export interface Project {
  id: number;
  title: string;
  description: string;
  imgFront: string;
  imgGallery?: string[];
  labels: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Luxury Home Interior',
    description:
      'This stunning project involved a complete interior repaint of a luxury home, focusing on modern aesthetics and high-quality finishes that elevate the living space.',
    imgFront: 'assets/images/proj_lux_home_interior.webp',
    labels: ['Interior Painting', 'Modern Aesthetics', 'High-Quality Finishes'],
  },
  {
    id: 2,
    title: 'Commercial Office Renovation',
    description:
      'We revitalized a dated office space into a vibrant and modern work environment, enhancing both functionality and style for a better workplace experience.',
    imgFront: 'assets/images/proj_lux_home_interior.webp',
    labels: [
      'Commercial Painting',
      'Modern Work Environment',
      'Functional Design',
    ],
  },
  {
    id: 3,
    title: 'Exterior Facade Restoration',
    description:
      'This project focused on restoring the exterior facade of a historic building, preserving its charm while ensuring durability and aesthetic appeal.',
    imgFront: 'assets/images/proj_ext_facade_res.webp',
    labels: ['Facade Restoration', 'Historic Preservation', 'Durability'],
  },
];
