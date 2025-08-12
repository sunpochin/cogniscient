'use client';

import NavBar from '../../../components/Navbar';
import Image from 'next/image';

interface MemberPageProps {
  params: { id: string };
}

const MemberPage: React.FC<MemberPageProps> = ({ params }) => {
  const memberId = params.id;

  // Placeholder data for member details
  const memberDetails = {
    1: {
      name: 'John Doe',
      title: 'CEO',
      description: `John Doe is a visionary leader with over 20 years of experience in the tech industry. He founded Cogniscient with a mission to bridge the gap between complex AI models and intuitive human interaction. His expertise spans cognitive science, machine learning, and strategic business development. John is passionate about creating technology that enhances human capabilities and simplifies complex systems.`, 
      fullImage: 'https://picsum.photos/seed/member1/600/400', // Random image for detail page
    },
    2: {
      name: 'Jane Smith',
      title: 'CTO',
      description: `Jane Smith is a brilliant technologist and the driving force behind Cogniscient's innovative solutions. With a Ph.D. in Computer Science and a background in neuroscience, she leads the development of cutting-edge AI and human-computer interaction technologies. Jane is committed to pushing the boundaries of what's possible in AI-powered product design.`, 
      fullImage: 'https://picsum.photos/seed/member2/600/400', // Random image for detail page
    },
    3: {
      name: 'Peter Jones',
      title: 'Lead Designer',
      description: `Peter Jones is an award-winning designer known for his ability to create intuitive and aesthetically pleasing user experiences. With a deep understanding of human psychology and design principles, Peter ensures that Cogniscient's products are not only functional but also delightful to use. He believes in a user-centered approach to design, always putting the human experience first.`, 
      fullImage: 'https://picsum.photos/seed/member3/600/400', // Random image for detail page
    },
  };

  const currentMember = memberDetails[parseInt(memberId as string)];

  if (!currentMember) {
    return (
      <div>
        <NavBar />
        <div className="min-h-screen bg-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
          <p>The member you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">{currentMember.name}</h1>
          <h2 className="text-2xl text-gray-600 text-center mb-8">{currentMember.title}</h2>
          <div className="flex justify-center mb-8">
            <Image
              src={currentMember.fullImage}
              alt={currentMember.name}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <p className="text-lg leading-relaxed text-gray-800">{currentMember.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
