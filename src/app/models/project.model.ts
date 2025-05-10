interface Highlight {
  title: string;
  description: string;
}

interface Details {
  client: string;
  date: string;
  role: string;
  type: string;
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
  overview: string;
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
    overview: 'This project involved a complete interior repaint of a luxury home, focusing on modern aesthetics and high-quality finishes. Our team meticulously selected elegant color choices and ensured every detail was executed to perfection, resulting in a stunning transformation that reflects the client’s vision.'
  },
  {
    id: 2,
    title: 'Commercial Office Renovation',
    description:
      'We revitalized a dated office space into a vibrant and modern work environment, enhancing both functionality and style for a better workplace experience.',
    imgService: 'assets/images/proj_comm_office_reno.webp',
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
    overview: 'This project involved a complete transformation of a dated office space into a vibrant and modern work environment. Our team focused on enhancing both functionality and style, ensuring that the new design promotes productivity and creativity. The use of bright colors and professional finishes has revitalized the workspace, making it an inviting place for employees and clients alike.',
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
    overview: 'The ‘Exterior Facade Restoration’ project involved meticulous work to restore the exterior of a historic building. Our team focused on preserving the building’s original charm while applying modern techniques to ensure long-lasting durability. This project showcases our commitment to quality and attention to detail in every stroke.',
  },
];
