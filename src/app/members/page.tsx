'use client';

import Image from 'next/image';
import NavBar from '../../components/Navbar'; // Import NavBar component

const members = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO',
    description: 'John is the visionary leader behind our company, driving innovation and growth.',
    image: '/cogniscient.png', // Placeholder image
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'CTO',
    description: 'Jane leads our technology development, ensuring cutting-edge solutions.',
    image: '/cogniscient.png', // Placeholder image
  },
  {
    id: 3,
    name: 'Peter Jones',
    title: 'Lead Designer',
    description: 'Peter crafts intuitive and beautiful user experiences.',
    image: '/cogniscient.png', // Placeholder image
  },
];

export default function MembersPage() {
  return (
    <div> {/* Added a wrapper div for NavBar and content */}
      <NavBar />
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg max-w-sm bg-gray-50">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <h3 className="text-lg text-gray-600 mb-4">{member.title}</h3>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

