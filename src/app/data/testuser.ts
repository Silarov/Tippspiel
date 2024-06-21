import { UserInfo } from './user.dto';
import { v4 as uuidv4 } from 'uuid'; // Make sure to install uuid: npm install uuid

const users: UserInfo[] = [
  new UserInfo(uuidv4(), 'Alice Johnson', 'alice.johnson@example.com', 'password123', 'english'),
  new UserInfo(uuidv4(), 'Bob Smith', 'bob.smith@example.com', 'password123', 'deutsch'),
  new UserInfo(uuidv4(), 'Charlie Brown', 'charlie.brown@example.com', 'password123', 'english'),
  new UserInfo(uuidv4(), 'David Wilson', 'david.wilson@example.com', 'password123', 'deutsch'),
  new UserInfo(uuidv4(), 'Eve Davis', 'eve.davis@example.com', 'password123', 'english'),
  new UserInfo(uuidv4(), 'Frank Miller', 'frank.miller@example.com', 'password123', 'deutsch'),
  new UserInfo(uuidv4(), 'Grace Lee', 'grace.lee@example.com', 'password123', 'english'),
  new UserInfo(uuidv4(), 'Hannah White', 'hannah.white@example.com', 'password123', 'deutsch'),
  new UserInfo(uuidv4(), 'Ian Clark', 'ian.clark@example.com', 'password123', 'english'),
  new UserInfo(uuidv4(), 'Jane Hall', 'jane.hall@example.com', 'password123', 'deutsch')
];
