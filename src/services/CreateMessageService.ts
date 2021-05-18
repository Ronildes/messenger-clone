import { getRepository } from 'typeorm';

import Message from '../models/Message';
import User from '../models/User';

import TokenDestructuring from './TokenDestructuring';

interface Request {
  token: string;
  content: string;
}

export default class CreateMessageService {
  public async execute({ token, content }: Request): Promise<Message> {
    const messageRepository = getRepository(Message);

    const userRepository = getRepository(User);

    const tokenToUserId = TokenDestructuring(token);
    const user = await userRepository.findOne({
      id: tokenToUserId,
    });

    if (!user) {
      throw new Error("This user don't exists");
    }

    const message = messageRepository.create({
      authorId: user.id,
      authorName: user.username,
      content,
    });

    await messageRepository.save(message);
    return message;
  }
}
