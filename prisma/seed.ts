import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      {
        title: 'Introduction to Mixing',
        description: 'Learn the basics of mixing audio.',
        videoUrl: 'https://www.youtube.com/watch?v=example1',
      },
      {
        title: 'Advanced Music Production',
        description:
          'A deep dive into professional music production techniques.',
        videoUrl: 'https://www.youtube.com/watch?v=example2',
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
