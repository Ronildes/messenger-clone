import { getRepository } from 'typeorm';
import Message from '../models/Message';

async function listMessageService(): Promise<Message[]> {
  const messageRepository = getRepository(Message);

  const messages = await messageRepository.find();

  return messages;
}

export default listMessageService;
