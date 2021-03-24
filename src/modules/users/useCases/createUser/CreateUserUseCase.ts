import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui

    const existUserByEmail = this.usersRepository.findByEmail(email);

    if (existUserByEmail) {
      throw new Error("This e-mail already in use");
    }

    const user = this.usersRepository.create({
      email,
      name,
    });

    return user;
  }
}

export { CreateUserUseCase };
