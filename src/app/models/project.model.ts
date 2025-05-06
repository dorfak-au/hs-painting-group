interface Highlight {
  title: string;
  description: string;
}

interface Details {
  client: string;
  date?: string;
  role?: string;
  type?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imgService: string;
  imgDetail: string;
  imgCollections?: string[];
  labels: string[];
  highlights: Highlight[];
  details: Details;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Luxury Home Interior',
    description:
      'This stunning project involved a complete interior repaint of a luxury home, focusing on modern aesthetics and high-quality finishes that elevate the living space.',
    imgService: 'assets/images/proj_lux_home_interior.webp',
    imgDetail: 'assets/images/proj_1_detail.webp',
    labels: ['Interior Painting', 'Modern Aesthetics', 'High-Quality Finishes'],
    highlights: [
      { title: 'Highlights', description: 'Elegance' },
      { title: 'Detials', description: 'Quality' },
      { title: 'Finish', description: 'Premium' },
      { title: 'Style', description: 'Transformation' },
    ],
    details: {
      client: 'Private Residence',
      date: 'May 2023',
      role: 'Lead Painter',
      type: 'Interior Repainting',
    },
  },
  {
    id: 2,
    title: 'Commercial Office Renovation',
    description:
      'We revitalized a dated office space into a vibrant and modern work environment, enhancing both functionality and style for a better workplace experience.',
    imgService: 'assets/images/proj_lux_home_interior.webp',
    imgDetail: 'assets/images/proj_2_detail.webp',
    highlights: [
      { title: 'Client', description: 'Tech Innovations Ltd.' },
      { title: 'Date', description: 'March 2023' },
      { title: 'Location', description: 'Perth, Australia' },
      { title: 'Services', description: 'Commercial Painting' },
    ],
    details: {
      client: 'Tech Innovations Ltd.',
      date: 'March 2023',
      role: 'Lead Painter',
      type: 'Commercial Office Renovation',
    },
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
    imgService: 'assets/images/proj_ext_facade_res.webp',
    highlights: [
      { title: 'Project', description: 'Restoration' },
      { title: 'Date', description: 'March 2023' },
      { title: 'Client', description: 'City Hall of Perth' },
      { title: 'Location', description: 'Perth' },
    ],
    details: {
      client: 'City Hall of Perth',
      date: 'November 2022',
      role: 'Lead Painter',
      type: 'Commercial Office Renovation',
    },
    imgDetail: 'assets/images/proj_3_detail.webp',
    labels: ['Facade Restoration', 'Historic Preservation', 'Durability'],
  },
];
