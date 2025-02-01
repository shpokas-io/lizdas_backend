import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      {
        title: 'Mentor-video',
        description: 'Mentor video for the landing page ',
        videoUrl: 'https://www.youtube.com/watch?v=9Q_4vUDimdI',
      },
    ],
  });

  console.log('✅ Seed data inserted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
