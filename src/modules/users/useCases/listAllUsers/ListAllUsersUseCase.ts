import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user === undefined) {
      throw new Error("Usuário não encontrado");
    }

    if (user.admin === false) {
      throw new Error("Usuário não Admin");
    }

    const list = this.usersRepository.list();

    return list;
  }
}

export { ListAllUsersUseCase };
