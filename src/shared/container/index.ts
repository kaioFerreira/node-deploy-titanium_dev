import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import './providers/MailTemplateProvider';
import './providers/MailProvider';
import './providers';
import IAcompanhamentosRepository from '@modules/acompanhamentos/repositories/IAcompanhamentosRepository';
import AcompanhamentosRepository from '@modules/acompanhamentos/infra/typeorm/repositories/AcompanhamentosRepository';

container.registerSingleton<IAcompanhamentosRepository>(
    'AcompanhamentosRepository',
    AcompanhamentosRepository,
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
    'UserTokensRepository',
    UserTokensRepository,
);
