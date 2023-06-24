import { db } from "../src/lib/db";

const main = async () => {
  console.log("Seeding...");
};

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
