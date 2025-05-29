import { faker } from '@faker-js/faker';
import { addRecords, checkIfRecordsAdded } from '../db/indexedDB';

export async function addData() {
  const dataExists = await checkIfRecordsAdded();
  if (dataExists)
  {
    return;
  } 
  
  const records = Array.from({ length: 50000 }, () => ({
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    company: faker.company.name(),
    location: `${faker.location.city()}`,
  }));

  await addRecords(records);
  
}
